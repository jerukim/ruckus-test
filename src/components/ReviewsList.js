import React from 'react'
import {
    Grid,
    Typography,
} from '@material-ui/core'

const ReviewsList = ({ children }) => {

    return (
        <div>
            <Typography>Reviews:</Typography>
            <Grid container direction='column' spacing={2} >
                {children}
            </Grid>
        </div>
    )
}

export default ReviewsList