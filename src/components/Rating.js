import React from 'react'
import {
    Grid,
    Typography
} from '@material-ui/core'
import { Star, StarBorder, StarHalf } from '@material-ui/icons'

const Rating = ({ rating, votes }) => {

    return (
        <Grid item container spacing={1}>
            <Grid item>
                <Typography>
                    {rating}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    {`(${votes})`}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Rating