import { INCREMENT, 
    DECREMENT , 
    ADD_TO_CART, 
    CHANGE_PRODUCT_PRICE,
    GET_TOTAL_PRICE
 } from "./types";

export const addToCart = (product,amount=1) =>{
    return{
        type:ADD_TO_CART,
        payload: {
            product,
            amount
        }
    }
}

export const increment = (id) =>{
    return{
        type: INCREMENT,
        payload: id
    }
}

export const decrement = (id) =>{
    return{
        type: DECREMENT,
        payload: id
    }
}

export const changePrice = (id) =>{
    return {
        type: CHANGE_PRODUCT_PRICE,
        payload: id
    }
}

export const getTotalPrice = () => {
    return {
        type: GET_TOTAL_PRICE
    }
}