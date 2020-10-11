import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getProducts } from "../redux/actions"

import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

import Product from "../components/ProductCard"
import Skeleton from "../components/Skeleton"

const Products = ({ getProducts, products }) => {
    const n = 16

    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} style={{ overflow: "hidden" }}>
                {products.length > 0
                    ? products.map((product, key) => <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                        <Product  {...product} />
                    </Grid>)
                    : [...Array(n)].map((e, key) => <Skeleton key={key} />)
                }
            </Grid>
        </Container>
    )
}

const mapStateToProps = ({ products }) => ({
    products: products
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
