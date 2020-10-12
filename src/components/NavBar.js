import React, { useState, useEffect } from "react"

import { useHistory } from "react-router-dom"
import { connect } from "react-redux"

import Grid from "@material-ui/core/Grid"
import Badge from "@material-ui/core/Badge"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

import SearchIcon from "@material-ui/icons/Search"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"

const NavBar = ({ cart }) => {
    const history = useHistory()
    const [cartSize, setCartSize] = useState(0)

    useEffect(() => {
        let cs = 0
        cart.forEach(product => {
            cs = cs + product.quantity
        })
        setCartSize(cs)
    }, [cart])

    return (
        <Container maxWidth="xl">
            <Grid container direction="row" justify="space-between" alignItems="center" className="navbar">
                <IconButton onClick={() => history.push("/")}>
                    <img alt="Logo" src="/logo512.png" width={45} />
                </IconButton>
                <Typography style={{ paddingLeft: 25 }} variant="h2">
                    Gebhaly Cart
                </Typography>

                <Grid item>
                    <Grid container direction="row" className="navbar-container" >
                        <Button className="button" onClick={() => history.push("/")} variant="text"><SearchIcon />Search</Button>
                        <Button className="button" onClick={() => history.push("/cart")} variant="text">
                            <Badge badgeContent={cartSize} color="primary">
                                <AddShoppingCartIcon /> Cart
                            </Badge>
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </Container >
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(NavBar)
