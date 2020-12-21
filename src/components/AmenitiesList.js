import React from 'react'

import {
    Grid,
    Typography,
} from '@material-ui/core'

const AmenitiesList = ({ children }) => {
    return (
        <Grid item xs={9} container spacing={1} alignContent='center' >
            <Grid item>
                <Typography>Amenities:</Typography>
            </Grid>
            {children}
        </Grid>
    )
}

export default AmenitiesList