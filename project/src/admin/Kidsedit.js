import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import { FaBackspace } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { toast } from "react-toastify"
import { Link, useParams } from 'react-router-dom';

const Kidsedit = () => {
    const {id} = useParams();
    const [productData, setProductData] = useState({
        Image:"",
        price: "",
        title: "",
        ds:"",
    },[]);

    useEffect(()=>{
        fetch(`http://localhost:5000/kids/${id}`)
        .then((res)=> res.json())
        .then((data) => setProductData(data));
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const price = form.price.value;
        const title = form.title.value;
        const ds = form.ds.value;

        const productObj = {
            image,
            price,
            title,
            ds,
        };
        console.log(productObj);
        fetch(`http://localhost:5000/patchkids/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(productObj),
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Product Updated Successfully");
            window.location.href ="/Admin/Kidsadmin";
        });

    }

    return (
        <div className='admin_men_edit'>
            <Admin/>
            <div className='kid-edit'>
                <p className='fs-2'>
                    ADD ITEMS
                </p>
                <form className='text-title' onSubmit={ handleSubmit }>
                    <label className='text-title-label fs-4' value="title">Title</label><br></br>
                    <input className='text-input fs-5' type='text'placeholder='Title'name='title' id='title' defaultValue={productData.title}></input><br></br>
                    <div className='row'>
                    <div className='col'>
                        <label className='fs-4'value="price">price</label><br></br>
                        <input  className='fs-5' type='text'placeholder='price'name='price' id='price'defaultValue={productData.price}></input><br></br>
                    </div>
                    <div className='col'>
                        <label className='fs-4'>compare price</label><br></br>
                        <input className='fs-5' type='text'placeholder='Compare price'></input><br></br>
                    </div>
                    </div>
                    <label className='text-title-label fs-4'value="image">Imge url</label><br></br>
                    <input className='text-input fs-5' type='url' placeholder='add url'name='image' id='image'defaultValue={productData.image}></input><br></br>
                    <label className='fs-4'value="ds">
                        Decription
                    </label><br></br>
                    <textarea className='text-input-textarea fs-5' aria-lable='decription'name='ds' id='ds'defaultValue={productData.ds}></textarea><br></br>
                    <button className='btn btn-danger'><Link className="moving-admin" to="/Admin/Kidsadmin"><FaBackspace />
                    Back </Link></button>
                    <button className='btn btn-success' type='submit'><IoIosCloudDone />
                    Sumit </button>
    
    
                </form>
            </div>
    
        </div>
      )
}

export default Kidsedit