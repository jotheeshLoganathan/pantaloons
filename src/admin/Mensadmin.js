import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import { Link } from 'react-router-dom'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import './admin.css'
import { toast } from 'react-toastify';

const Mensadmin = () => {
    const [productData,setProductData]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/getmen")
        .then((res)=>res.json())
        .then((data)=>setProductData(data));
    },[]);  
    const deleteProduct = (id)=>{
        fetch(`http://localhost:5000/deletemen/${id}`,{
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
        <div className='man_addon'>
            <button className='btn mens_btn btn-success mr-3'><Link className='additem-btn' to='/Admin/Men/Menaddcart'><MdAddToPhotos />
            ADD ITEMS</Link></button>
            <table className='table table-bordered'>
                <thead> 
                    <th>image</th>
                    <th>title</th>
                    <th>price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {productData.map((item)=>(
                    <tr key={item._id}>
                        <td className='data-from-post'>
                            <img className='postimage' src={item.image} alt='img'/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.ds}</td>
                        <td>
                            <button className='btn btn-success'>
                                <Link className='menedit' to={`/Admin/Men/Editmen/${item._id}`}>
                                    <RiEdit2Fill />Edit
                                </Link>
                            </button>
                        </td>
                        <td>
                            <button className='btn btn-danger'onClick={()=>{deleteProduct(item._id)}}><MdDeleteForever />
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

export default Mensadmin