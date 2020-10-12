import React, { useState, useEffect } from "react"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import CartCard from "../components/CartCard"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

const Cart = ({ products }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    let history = useHistory()

    useEffect(() => {
        let tp = 0
        products.forEach(product => {
            tp = tp + (product.price * product.quantity)
        })
        setTotalPrice(tp)
    }, [products])

    return (
        <Container maxWidth="xl">
            {
                products.length === 0
                    ? <Grid container justify="center" alignItems="center" style={{ height: "60vh" }}>
                        <Typography>
                            <Link to="/">
                                Go Add Products
                            </Link>
                        </Typography>
                    </Grid>
                    : <>
                        <Grid container direction="row">
                            <Grid container justify="center" alignItems="center" style={{ margin: 25 }}>
                                <Typography color="primary" style={{ fontSize: 34 }}>
                                    TOTAL PRICE: <strong> {Number(totalPrice).toFixed(2) + " EGP"}</strong>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            {products.map((cartProduct, key) => <Grid key={key}>
                                <CartCard  {...cartProduct} />
                                <hr />
                            </Grid>)}
                            <Button style={{ float: "right" }} onClick={() => history.push("/checkout")}>Checkout</Button>
                        </Grid>
                    </>
            }
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.cart
})

export default connect(mapStateToProps)(Cart)