import React, { useState } from 'react'
import {
    makeStyles,
    Grid,
    Card,
    CardMedia,
    Typography,
} from '@material-ui/core'
import Rating from './Rating'
import RestaurantDetail from './RestaurantDetail'

import { grayImage } from '../constants'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 150
    },
    thumb: {
        height: 150,
        width: 150,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

const RestaurantItem = ({ restaurant }) => {
    const classes = useStyles()

    const [modalShowing, setModalShowing] = useState(false)

    const openModel = () => {
        setModalShowing(true)
    }
    const closeModel = () => {
        setModalShowing(false)
    }

    const { thumb, featured_image } = restaurant
    const image = thumb || featured_image || grayImage

    return (
        <Grid item sm={12} md={6}>
            <Card className={classes.root} onClick={openModel}>
                <Grid container spacing={2}>
                    <Grid item>
                        <CardMedia
                            className={classes.thumb}
                            image={image}
                        />
                    </Grid>

                    <Grid item xs={6} sm >
                        <Typography gutterBottom>{restaurant.name}</Typography>

                        <Rating
                            rating={restaurant.user_rating.aggregate_rating}
                            votes={restaurant.user_rating.votes}
                        />

                        <Grid container spacing={1}>
                            {/* <Grid item>
                                <Typography>
                                    {restaurant.price_range}
                                </Typography>
                            </Grid> */}

                            <Grid item>
                                <Typography>
                                    {restaurant.cuisines}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={3} container direction='column'>
                        <Grid item>
                            <Typography variant="subtitle1">{restaurant.phone_numbers}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{restaurant.location.address.split(',')[0]}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>

            <RestaurantDetail restaurant={restaurant} open={modalShowing} onClose={closeModel} />
        </Grid>
    )
}

export default RestaurantItem