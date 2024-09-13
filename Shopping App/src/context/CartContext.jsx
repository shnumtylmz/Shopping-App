import { createContext, useState, useContext, useReducer } from "react";
import { cartReducer, initialState } from "./CartReducer";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer , initialState);


    const addToCart = (product) =>{
        console.log("Product Added:" , product)
        dispatch({type: "ADD_TO_CART", payload: product})
    };

    const removeFromCart = (id) =>{
        dispatch({type: "REMOVE_FROM_CART", payload: {id}})
    }

    const getCartItems = () => {
        return cart;
    }

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    return (
        <CartContext.Provider value={{addToCart, cart, removeFromCart, getCartItems, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext);
}