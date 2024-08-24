import React from 'react'
import Admin from './Admin'
import { FaBackspace } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Womenaddcart = () => {
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const ds = form.ds.value;
        const price = form.price.value;
        const quantity = 1;

        if(image === "" || title === "" || ds ==="" || price ===""){
            toast.warn("fill all the field");
        }
        const addProduct = {
            image,title,ds,price,quantity
        };
        console.log(addProduct);
        fetch("http://localhost:5000/women",{
            method: "POST",  
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(addProduct) 
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.success("Product Added Successfully")
            form.reset();
            window.location.href= "/Admin/Women/womenadmin";
        });
        
    }
  return (
    <div className='admin_men_edit'>
        <Admin/>
        <div className='women-edit'>
            <p className='fs-2'>
                ADD ITEMS
            </p>
            <form className='text-title' onSubmit={ handleSubmit }>
                <label className='text-title-label fs-4'value="title" >Title</label><br></br>
                <input className='text-input fs-5' type='text'placeholder='Title'name='title'id='title'></input><br></br>
                <div className='row'>
                <div className='col'>
                    <label className='fs-4'value="price">price</label><br></br>
                    <input  className='fs-5' type='text'placeholder='price'name='price'id='price'></input><br></br>
                </div>
                <div className='col'>
                    <label className='fs-4'>compare price</label><br></br>
                    <input className='fs-5' type='text'placeholder='Compare price'></input><br></br>
                </div>
                </div>
                <label className='text-title-label fs-4'value="image">Imge url</label><br></br>
                <input className='text-input fs-5' type='url' placeholder='add url'name='image'id='image'></input><br></br>
                <label className='fs-4' value="ds">
                    Decription
                </label><br></br>
                <textarea className='text-input-textarea fs-5' aria-lable='decription'id='ds'name='ds'></textarea><br></br>
                <button className='btn btn-danger'><Link className="moving-admin" to="/Admin/Womenadmin"></Link><FaBackspace />
                Back </button>
                <button className='btn btn-success'><IoIosCloudDone />
                Sumit </button>


            </form>
        </div>

    </div>
  )
}

export default Womenaddcart