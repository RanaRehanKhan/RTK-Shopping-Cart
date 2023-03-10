import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";
const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state = initialState, action) => {
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if(index >= 0) {
                state.cart[index].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },
        getCartTotal: (state) => {
            let {totalQuantity, totalPrice} = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price,  quantity} = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                }, {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            })
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item;
            })
        }


    },
});

export const  {addToCart, getCartTotal, removeItem, increaseItemQuantity,  decreaseItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;
