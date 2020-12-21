import React from 'react'

import {
    Grid,
    Typography,
    Avatar,
} from '@material-ui/core'

const ReviewItem = ({ review }) => {
    return (
        <Grid item container>
            <Grid item xs={2} container direction='column' alignItems='center'>
                <Avatar src={review.user.profile_image} />
                <Typography variant='subtitle2'>{review.user.name}</Typography>
                <Typography variant='subtitle2'>{review.review_time_friendly}</Typography>
            </Grid>

            <Grid item xs={10}>
                <Typography variant='body2' >{review.review_text}</Typography>
            </Grid>
        </Grid>
    )
}

export default ReviewItem