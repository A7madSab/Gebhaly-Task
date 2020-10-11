import React from "react"

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"

const styles = makeStyles({
    container: {
        height: "100%"
    },
    card: {
        width: "100%",
        borderRadius: 35,
        margin: 5,
        padding: 0
    },
    img: {
        width: "96px",
        height: "96px",
        objectFit: "contain",
    },
    textSection: {
        padding: 15,
        paddingRight: 0
    }
})

const CartCard = ({ id, createdAt, name, picture, category, color, available_quantity, price }) => {
    const classes = styles()
    let history = useHistory()

    return (
        <Grid onClick={() => history.push(`/category/${id}`)} className={classes.card}>
            <Grid container direction="row" className={classes.container}>
                <Grid item container xs={3} justify="center" alignItems="center">
                    <img className={classes.img} src={picture} alt="Catrogry" />
                </Grid>

                <Grid item container xs={9} justify="center" direction="row" className={classes.textSection}>
                    <Grid item xs={9}>
                        <Grid container alignItems="center">
                            <Typography gutterBottom variant="h6" component="h6">
                                {name}
                            </Typography>
                            <Grid item style={{ paddingLeft: 5, paddingBottom: 5 }}>
                                <Box width={15} height={15} style={{ backgroundColor: color, borderRadius: 35 }} />
                            </Grid>
                        </Grid>
                        <Typography>
                            {category}
                        </Typography>
                    </Grid>


                    <Grid item container justify="center" alignItems="center" xs={3} style={{ borderLeft: "2px solid #44a6c6" }}>
                        <Typography gutterBottom variant="h6" component="h6">
                            {price + " EGP"}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CartCard
