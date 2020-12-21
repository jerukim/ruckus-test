import React from 'react'
import {
    Grid,
    Typography,
} from '@material-ui/core'
import Rating from './Rating'

const RestaurantInfo = ({ restaurant, ...rest }) => {
    return (
        <Grid item {...rest}>
            <Typography gutterBottom>{restaurant.name}</Typography>

            <Rating
                rating={restaurant.user_rating.aggregate_rating}
                votes={restaurant.user_rating.votes}
            />

            <Grid container spacing={1}>
                <Grid item>
                    <Typography>
                        {restaurant.price_range}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography>
                        {restaurant.cuisines}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default RestaurantInfo