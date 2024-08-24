import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import { Link } from 'react-router-dom'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import './admin.css'
import { toast } from 'react-toastify';

const Kidssadmin = () => {
    const [productData,setProductData]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/getkids")
        .then((res)=>res.json())
        .then((data)=>setProductData(data));
    },[]);
    const deleteProduct = (id)=>{
        fetch(`http://localhost:5000/deletekids/${id}`,{
            method:"DELETE",
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.success("Product deleted Successfully");
            setProductData((prevProductData)=>
            prevProductData.filter((item)=>item._id !== id))
        })
    }
  return (
    <div className='admin_display'>
        <Admin/>
        <div className='kids_addon'>
            <button className='btn kids_btn btn-success'><Link className='additem-btn' to='/Admin/Kidsaddcart'><MdAddToPhotos />ADD ITEMS</Link></button>
                <table className='table table-bordered table-sm'>
                    <thead> 
                        <th>image</th>
                        <th>title</th>
                        <th>price</th>
                        <th>Decription</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                    {productData.map((item)=>(
                        <tr key={item._id}>
                            <td className='data-from-post'><img className='postimage' src={item.image} alt='item-image'/></td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.ds}</td>
                            <td>
                                <button className='btn btn-success'>
                                    <Link className='editbutton-kid' to={`/Admin/Kidsedit/${item._id}`}><RiEdit2Fill />
                                Edit
                                </Link>
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>{deleteProduct(item._id)}}><MdDeleteForever />
                                    Delete
                                </button>
                            </td>
                        </tr>
                        ))}

                    </tbody>
                </table>
        </div>
    </div>

  )
}

export default Kidssadmin