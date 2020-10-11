import { GET_PRODUCTS } from "./actions"

const InitalCartState = []

export const cartReducer = (state = InitalCartState, action) => {
    switch (action) {
        default:
            return state
    }
}

const InitalProductsState = []

export const productsReducer = (state = InitalProductsState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}
