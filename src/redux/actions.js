import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsTypes";


export const addToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data
})

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
})