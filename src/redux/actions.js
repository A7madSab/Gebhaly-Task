import axios from "axios"

export const ADD_PRODUCT_COUNT = "ADD_PRODUCT_COUNT"
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export const REMOVE_PRODUCT_COUNT = "REMOVE_PRODUCT_COUNT"
export const DELETE_PRODUCT_COUNT = "DELETE_PRODUCT_COUNT"
export const GET_PRODUCTS = "GET_PRODUCTS"
export const ERROR = "ERROR"

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get("https://5f8304eb6b97440016f4e216.mockapi.io/api/cart")
        dispatch({ type: GET_PRODUCTS, payload: res.data })
    } catch (err) {
        dispatch({ type: ERROR, payload: err.message })
    }
}

export const addProductToCart = product => ({ type: ADD_PRODUCT_TO_CART, payload: product })

export const addProduct = id => ({ type: ADD_PRODUCT_COUNT, payload: id })

export const removeProduct = id => ({ type: REMOVE_PRODUCT_COUNT, payload: id })

export const deleteProduct = id => ({ type: DELETE_PRODUCT_COUNT, payload: id })
