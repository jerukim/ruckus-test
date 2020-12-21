import React from 'react'
import {
    Grid,
    Chip,
} from '@material-ui/core'



const AmenityItem = ({ amenity }) => {
    return (
        <Grid item>
            <Chip label={amenity} />
        </Grid>
    )
}

export default AmenityItem

