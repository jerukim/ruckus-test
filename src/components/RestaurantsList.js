import React from 'react'

import {
    Grid
} from '@material-ui/core'


const RestaurantsList = ({ children }) => {

    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    )
}

export default RestaurantsList