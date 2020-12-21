import React from 'react'

import {
    Grid,
    Typography,
} from '@material-ui/core'

const AmenitiesList = ({ children }) => {
    return (
        <Grid item xs={9} container spacing={2} justify='space-around' alignContent='center' >
            <Grid item>
                <Typography>Amenities:</Typography>
            </Grid>
            {children}
        </Grid>
    )
}

export default AmenitiesList