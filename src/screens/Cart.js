import React from "react"

import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import CartCard from "../components/CartCard"
import { connect } from "react-redux"

const Cart = ({ cart }) => {
    return (
        <Container maxWidth="xl">
            <Grid>
                {cart.products.map((cartProduct, key) => <Grid key={key}>
                    <CartCard  {...cartProduct} />
                    {/* {key === cart.length - 1 ? null : <hr />} */}
                    <hr />
                </Grid>)}
            </Grid>
            <Grid container direction="row">
                <Grid container justify="center" alignItems="center" style={{ margin: 25 }}>
                    <Typography color="primary" style={{ fontSize: 34 }}>
                        TOTAL PRICE: <strong> {cart.totalPrice + " EGP"}</strong>
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    )
}

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(Cart)