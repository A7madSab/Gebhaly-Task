import { GET_PRODUCTS, ADD_PRODUCT_TO_CART } from "./actions"

const InitalCartState = {
    totalPrice: 2149,
    products: [{
        "id": "3",
        "createdAt": "2020-10-10T20:08:25.528Z",
        "name": "Gorgeous Granite Car",
        "picture": "http://lorempixel.com/640/480/fashion",
        "category": "Automotive",
        "color": "purple",
        "available_quantity": 67,
        "price": "542.00"
    },
    {
        "id": "2",
        "createdAt": "2020-10-11T10:52:53.088Z",
        "name": "Licensed Soft Shoes",
        "picture": "http://lorempixel.com/640/480/people",
        "category": "Books",
        "color": "teal",
        "available_quantity": 96,
        "price": "434.00"
    },
    {
        "id": "4",
        "createdAt": "2020-10-11T01:47:41.134Z",
        "name": "Gorgeous Fresh Bike",
        "picture": "http://lorempixel.com/640/480/sports",
        "category": "Baby",
        "color": "salmon",
        "available_quantity": 97,
        "price": "875.00"
    },
    {
        "id": "6",
        "createdAt": "2020-10-11T14:20:32.748Z",
        "name": "Generic Soft Shoes",
        "picture": "http://lorempixel.com/640/480/food",
        "category": "Industrial",
        "color": "green",
        "available_quantity": 6,
        "price": "298.00"
    }]
}

export const cartReducer = (state = InitalCartState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                products: [...state.products, action.payload],
                totalPrice: Number(state.totalPrice) + Number(action.payload.price)
            }
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
