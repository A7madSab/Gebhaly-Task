import React from "react"

import { useHistory } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import SearchIcon from "@material-ui/icons/Search"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "blue",
        innerHeight: "100%",
        borderRadius: 35,
        height: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navBar: {
        paddingTop: 25,
        paddingBottom: 25,
    }
}))

const NavBar = () => {
    const history = useHistory()
    const classes = useStyles()

    return (
        <Container maxWidth="xl">
            <Grid container direction="row" justify="space-between" alignItems="center" className={classes.navBar}>
                <IconButton onClick={() => history.push("/")}>
                    <img alt="Logo" src="/logo512.png" width={45} />
                </IconButton>
                <Typography style={{ paddingLeft: 25 }} variant="h2">
                    Gebhaly Cart
                </Typography>

                <Grid item>
                    <Grid container direction="row" >
                        <Button className={classes.button} onClick={() => history.push("/")} variant="text"><SearchIcon />Search</Button>
                        <Button className={classes.button} onClick={() => history.push("/cart")} variant="text"><AddShoppingCartIcon /> Cart </Button>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}

export default NavBar
