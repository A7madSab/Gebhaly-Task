import { GET_PRODUCTS, ADD_PRODUCT_TO_CART, ADD_PRODUCT_COUNT, REMOVE_PRODUCT_COUNT, DELETE_PRODUCT_COUNT } from "./actions"

const InitalCartState = []

export const cartReducer = (state = InitalCartState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            if (state.length === 0) {
                return [{ ...action.payload, quantity: 1 }]
            } else {
                let duplicate = false
                // Check if the product i'm adding already exists
                state.forEach(currentProduct => {
                    if (currentProduct.id === action.payload.id) {
                        duplicate = true
                    }
                })

                // if it doesn't exist ill just push it into the array
                if (!duplicate) {
                    return [...state, { ...action.payload, quantity: 1 }]
                }

                // if it does exist i'll check find the exact product and add the "quantity" attr
                if (duplicate) {
                    const finalProducts = state.map((currentProduct) => {
                        if (currentProduct.id === action.payload.id) {
                            return { ...currentProduct, quantity: currentProduct.quantity + 1 }
                        } else {
                            return currentProduct
                        }
                    })
                    return finalProducts
                }
            }
            break

        case ADD_PRODUCT_COUNT:
            return state.map(currentProduct => {
                if (currentProduct.id === action.payload) {
                    return { ...currentProduct, quantity: parseInt(currentProduct.quantity) + 1 }
                } else {
                    return currentProduct
                }
            })

        case REMOVE_PRODUCT_COUNT:
            const finalProductsRemove = state.map(currentProduct => {
                if (currentProduct.id === action.payload) {
                    return { ...currentProduct, quantity: parseInt(currentProduct.quantity) - 1 }
                } else {
                    return currentProduct
                }
            })
            return finalProductsRemove.filter(product => product.quantity !== 0)

        case DELETE_PRODUCT_COUNT:
            return state.filter(product => product.id !== action.payload)

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