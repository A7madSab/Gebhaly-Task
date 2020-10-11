import React from "react"

import Grid from "@material-ui/core/Grid"
import Skeleton from "@material-ui/lab/Skeleton"

const ProductSkeleton = () => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width="100%" height={118} />
        </Grid>
    )
}

export default ProductSkeleton
