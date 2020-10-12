import React, { useState, useEffect } from "react"

import Table from "@material-ui/core/Table"
import Paper from "@material-ui/core/Paper"
import TableRow from "@material-ui/core/TableRow"
import Container from "@material-ui/core/Container"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import { makeStyles } from "@material-ui/core/styles"
import TableContainer from "@material-ui/core/TableContainer"

import { connect } from "react-redux"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const createData = (name, brand, price, quantity) => {
    return { name, brand, price, quantity, totalPrice: price * quantity }
}

const Checkout = ({ cart }) => {
    const classes = useStyles()
    const [rows, setRows] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let tr = []
        let tp = 0
        cart.forEach(({ name, category, price, quantity }) => {
            tr.push(createData(name, category, price, quantity))
            tp = tp + (price * quantity)
        })
        setRows(tr)
        setTotalPrice(tp)
    }, [cart])

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.brand}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.totalPrice}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography>
                Total Price:{totalPrice}
            </Typography>
        </Container>
    )
}

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(Checkout)
