import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cardslice/Cardslice'
import './cart.css'
const Cartpage = () => {
    const cartProduct = useSelector(state=>state.cart.cartItems)

    const dispatch = useDispatch()

    const deleteCart = (item) =>(
        dispatch(deleteFromCart(item))
    )
    const incrementQuantity = (id,quantity) =>{
        dispatch(updateQuantity({
            id,quantity: quantity + 1
        }))
    }
    const decrementQuantity = (id,quantity) =>{
        if(quantity > 1){
            dispatch(updateQuantity({id, quantity: quantity - 1}));
        }
    }
  return (
    <div>
        <div className=' pt-5'>
            <div className='container'>
                {cartProduct.map((item)=>(
                    <div className="border border-success bg-success-subtle" key={item.id}>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <img src={item.image} className="img-thumbnail p-20px" alt="..."/>
                            </div>
                            <div className='col-sm-8'>
                                <h5 className="h2 w-5">{item.title}</h5>
                                <p className='fs-5'>₹{item.price}</p>
                                <p className='fs-5'>{item.ds}</p>
                                <button type='button' className='bcolor' onClick={() => decrementQuantity(item._id,item.quantity)}>-</button>
                                Quantity {item.quantity}
                                <button type='button' className='bcolor' onClick={() => incrementQuantity(item._id,item.quantity)}>
                                    +
                                </button>
                            </div>
                            <div className='col-sm-2'>
                                <button onClick={()=>deleteCart(item)} className='btn btn-danger btn-sm fw-bolder text-center'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}
export default Cartpage