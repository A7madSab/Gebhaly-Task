import React from "react"
import { Switch, Route } from "react-router-dom"

import NavBar from "../components/NavBar"

import Cart from "../screens/Cart"
import Products from "../screens/Products"

const Navigation = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Products} />
                <Route extact path="/cart" component={Cart} />
            </Switch>
        </>
    )
}

export default Navigation
