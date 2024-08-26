import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import { Link } from 'react-router-dom'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import './admin.css'
import { toast } from 'react-toastify';

const Womenadmin = () => {
    const [productData, setProductData] = useState([]);
    const [bulkItems, setBulkItem] = useState([]);
    const [totalItem, setTotalItem] = useState(false);
    // const [correntPage, setCorrentPage] = useState([1]);
    // const [totalPage, setTotalPage] = useState([1]);

    useEffect(() => {
        fetch("http://localhost:5000/getwomen")
            .then((res) => res.json())
            .then((data) => setProductData(data))
    }, []);
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/deletewomen/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Product deleted Successfully");
                setProductData((prevProductData) =>
                    prevProductData.filter((item) => item._id !== id))
            })
    }
    const bulkDeleteItem = () => {
        fetch(`http://localhost:5000/bulkDelete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ allIds: bulkItems })
        })
            .then((req) => req.json())
            .then((data) => {
                setProductData(previousData => previousData.filter(item => !bulkItems.includes(item._id)));
            })
    }
    const hendleSelectedItem = (id) => {
        setBulkItem(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };
    const hendleBulkSelectItem = () => {
        if (totalItem) {
            setBulkItem([])
        }
        else {
            setBulkItem(productData.map(item => item._id))
        }
        setTotalItem(!totalItem)
    }
    // const handelePreviousPage =() => {
    //     setCorrentPage((prev) => Math.max(prev -1, 1));
    // }
    // const handleNextPage = () => {
    //     setCorrentPage((next) => Math.min(next + 1,totalPage));
    // }


    return (
        <div className='admin_display'>
            <Admin />
            <div className='women_addon'>
                <button className='btn womens_btn btn-success'><Link className='additem' to='/Admin/Womenaddcart'><MdAddToPhotos />ADD ITEMS</Link></button>
                {bulkItems.length > 1 ? (
                    <button className='btn btn-danger'
                        onClick={bulkDeleteItem} disabled={productData.length === 0}>Bulk delete
                    </button>
                ) :
                    ('')
                }

                <table className='table table-bordered'>
                    <thead>
                        <th>
                            <input
                                type='checkbox'
                                onChange={hendleBulkSelectItem}
                                checked={totalItem}
                            />
                        </th>
                        <th>image</th>
                        <th>title</th>
                        <th>price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {productData.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <input
                                        type='checkbox'
                                        onChange={() => hendleSelectedItem(item._id)}
                                        checked={bulkItems.includes(item._id)} />
                                </td>
                                <td className='data-from-post'>
                                    <img className='postimage' src={item.image} alt='img' /></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.ds}</td>
                                <td>
                                    <button className='btn btn-success'>
                                        <Link className='womenbtnedit' to={`/Admin/Womenedit/${item._id}`}>
                                            <RiEdit2Fill />Edit
                                        </Link>
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => { deleteProduct(item._id) }}><MdDeleteForever />
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

export default Womenadmin