import React from 'react'

import {
    Grid,
    Typography,
} from '@material-ui/core'

const AmenitiesList = ({ children }) => {
    return (
        <Grid item xs={8} container spacing={2} >
            <Grid item>
                <Typography>Amenities:</Typography>
            </Grid>
            {children}
        </Grid>
    )
}

export default AmenitiesList