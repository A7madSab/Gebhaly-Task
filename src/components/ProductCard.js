import React, { useState } from "react"

import Alert from "@material-ui/lab/Alert"

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Snackbar from "@material-ui/core/Snackbar"
import Collapse from "@material-ui/core/Collapse"
import CardMedia from "@material-ui/core/CardMedia"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import CloseIcon from "@material-ui/icons/Close"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { connect } from "react-redux"
import { addProductToCart } from "../redux/actions"

const ProductCard = ({ id, createdAt, name, picture, category, color, available_quantity, price, addProductToCart }) => {
    const [expanded, setExpanded] = useState(false)
    const [snackbar, setSnackbar] = useState(false)

    const addToCart = () => {
        setSnackbar(true)
        addProductToCart({ id, createdAt, name, picture, category, color, available_quantity, price })
    }

    return (
        <>
            <Card>
                <CardMedia image={picture} className="media" />
                <CardContent>

                    <div>
                        <Typography variant="h6" className="title">
                            {name}
                        </Typography>
                    </div>
                    <CardActions style={{ padding: 0 }}>
                        <Grid container direction="column">
                            <Typography>
                                {price + " EGP"}
                            </Typography>
                            <Typography>
                                Available: {available_quantity > 0
                                    ? <CheckCircleOutlineIcon fontSize="small" style={{ color: "green" }} />
                                    : <CloseIcon fontSize="small" style={{ color: "red" }} />}
                            </Typography>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <Typography>
                                        Colors:
                                    </Typography>
                                </Grid>
                                <Grid item style={{ paddingLeft: 5 }}>
                                    <Box width={15} height={15} style={{ backgroundColor: color, borderRadius: 35 }} />
                                </Grid>
                            </Grid>

                        </Grid>

                        <IconButton onClick={() => addToCart(id)} aria-label="add to cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton onClick={() => setExpanded(!expanded)} aria-label="show more">
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <hr />
                            <Typography>
                                {category}
                            </Typography>
                            <hr />
                            <Typography paragraph>
                                "Lorem ipsum dolor minim Lorem excepteur laborum dolor proident sint in est eiusmod. Esse nulla et reprehenderit dolor mollit. Et dolor cillum cillum eu labore quis commodo. Nisi esse id excepteur ut eiusmod consequat incididunt ipsum velit consequat proident Lorem. Reprehenderit est nisi aliqua excepteur dolor et eiusmod esse adipisicing do proident laboris aliqua. Dolor eiusmod magna consequat enim veniam."
                            </Typography>
                            <hr />
                        </CardContent>
                    </Collapse>
                </CardContent>
            </Card>

            {/* Snackbar */}
            <Snackbar open={snackbar} autoHideDuration={1000} onClose={() => setSnackbar(false)}>
                <Alert onClose={() => setSnackbar(false)} severity="success">
                    Added Product To Cart.
               </Alert>
            </Snackbar>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addProductToCart: product => dispatch(addProductToCart(product))
})

export default connect(null, mapDispatchToProps)(ProductCard)
