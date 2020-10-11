import axios from "axios"

export const GET_PRODUCTS = "GET_PRODUCTS"
export const ERROR = "ERROR"

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get("https://5f8304eb6b97440016f4e216.mockapi.io/api/cart")
        dispatch({ type: GET_PRODUCTS, payload: res.data })
    } catch (err) {
        console.log("error fetch project", err)
        dispatch({ type: ERROR, payload: err.message })
    }
}


export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"

export const addProductToCart = product => ({ type: ADD_PRODUCT_TO_CART, payload: product })