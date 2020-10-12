import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const Product = ({ products, match }) => {
    const { id } = match.params
    const [product, setProducts] = useState({})

    useEffect(() => {
        const res = products.filter(product => product.id === id)
        setProducts(res[0])
    }, [id, products])

    return (
        <Container>
            {product
                ? <Grid container>
                    <Grid item xs={6} container direction="column" justify="center" style={{ padding: 35 }}>
                        <Typography variant="h3">{product.category}</Typography>
                        <Typography>[{product.name}]</Typography>
                        <Grid item style={{ paddingLeft: 5 }}>
                            <Box width={15} height={15} style={{ backgroundColor: product.color, borderRadius: 35 }} />
                        </Grid>
                        <Typography>Available Quantity: {product.available_quantity}</Typography>
                        <Typography>Price: {product.price} EGP</Typography>
                    </Grid>

                    <Grid item xs={6} container justify="center" alignItems="center" style={{ padding: 35 }}>
                        <img src={product.picture} alt="category" width="420" height="315" />
                    </Grid>
                </Grid>
                : <Typography>
                    No Product
                </Typography>
            }
        </Container>
    )
}

const mapStateToProps = ({ products }) => ({ products })

export default connect(mapStateToProps)(Product)