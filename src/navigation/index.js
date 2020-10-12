import React from "react"
import { Switch, Route } from "react-router-dom"

import NavBar from "../components/NavBar"

import Cart from "../screens/Cart"
import Product from "../screens/Product"
import Checkout from "../screens/Checkout"
import Products from "../screens/Products"

const Navigation = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Products} />
                <Route extact path="/checkout" component={Checkout} />
                <Route extact path="/cart" component={Cart} />
                <Route exact path="/product/:id" component={Product} />
            </Switch>
        </>
    )
}

export default Navigation
