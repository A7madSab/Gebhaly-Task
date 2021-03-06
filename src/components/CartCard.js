import React from "react"

import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { addProduct, removeProduct, deleteProduct } from "../redux/actions"

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import AddIcon from "@material-ui/icons/Add"
import CloseIcon from "@material-ui/icons/Close"
import RemoveIcon from "@material-ui/icons/Remove"
import IconButton from "@material-ui/core/IconButton"


const CartCard = ({ id, name, picture, category, color, available_quantity, createdAt, price, quantity, addProduct, removeProduct, deleteProduct }) => {
    let history = useHistory()

    return (
        <Grid className="row">
            <Grid container direction="row" className="container">

                <Grid item container xs={1} justify="center" alignItems="center">
                    <IconButton onClick={() => deleteProduct(id)}>
                        <CloseIcon />
                    </IconButton>
                </Grid>

                <Grid item container xs={2} justify="center" alignItems="center">
                    <img onClick={() => history.push(`/product/${id}`)} className="img" src={picture} alt="Catrogry" />
                </Grid>

                <Grid item container xs={9} justify="center" alignItems="center" direction="row" className="textSection">
                    <Grid item xs={9}>
                        <Grid container alignItems="center">
                            <Grid item style={{ padding: 5 }}>
                                <Box width={15} height={15} style={{ backgroundColor: color, borderRadius: 35, marginBottom: 8 }} />
                            </Grid>
                            <Typography gutterBottom variant="h6" component="h6">
                                {name}
                            </Typography>
                            <Typography variant="caption">
                                [{category}]
                            </Typography>
                        </Grid>
                        <Typography> {quantity} * {price} EGP </Typography>
                    </Grid>

                    <Grid item container justify="center" alignItems="center" xs={3} style={{ borderLeft: "2px solid #44a6c6" }}>

                        <IconButton onClick={() => addProduct(id)}>
                            <AddIcon />
                        </IconButton>

                        <Typography gutterBottom variant="h6" component="h6">
                            {(price * quantity) + " EGP"}
                        </Typography>

                        <IconButton onClick={() => removeProduct(id)}>
                            <RemoveIcon />
                        </IconButton>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    addProduct: id => dispatch(addProduct(id)),
    removeProduct: id => dispatch(removeProduct(id)),
    deleteProduct: id => dispatch(deleteProduct(id))
})

export default connect(null, mapDispatchToProps)(CartCard)
