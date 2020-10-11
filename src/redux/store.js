import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { cartReducer, productsReducer } from "./reducers"

const store = createStore(
    combineReducers({
        cart: cartReducer,
        products: productsReducer
    }),
    compose(
        applyMiddleware(thunk, logger)
    )
)

export default store
