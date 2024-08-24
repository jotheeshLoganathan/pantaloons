import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem('cartItems')

const initialState = {
    cartItems : storedItems ? JSON.parse(storedItems) : []
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers :{

        addToCort : (state, action) => {
            const newItem =action.payload
            const existingItem = state.cartItems.find(items => items._id === newItem._id)
            if(existingItem){
                existingItem.quantity +=newItem.quantity
            }else{
                state.cartItems.push({
                    _id :newItem._id,
                    title : newItem.title,
                    image : newItem.image,  
                    price : newItem.price,
                    ds : newItem.ds,
                    quantity :newItem.quantity
                });

            }
            localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems))
        } ,
        deleteFromCart : (state,action) =>{
            state.cartItems =state.cartItems.filter(items => items._id !== action.payload._id)
            localStorage.setItem( 'cartItems' , JSON.stringify(state.cartItems))
        },
        updateQuantity: (state,action) =>{
            const {id,quantity} = action.payload;
            const itemToUpdate = state.cartItems.find(item => item._id === id);
            if(itemToUpdate){
                itemToUpdate.quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        }
    },
})
export default cartSlice.reducer
export const {addToCort,deleteFromCart,updateQuantity} = cartSlice.actions