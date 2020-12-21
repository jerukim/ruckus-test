import React, { useEffect, useState } from 'react'
import {
    makeStyles,
    Grid,
    Typography,
    Modal,
    Backdrop
} from '@material-ui/core'
import Rating from './Rating'

import { getRestaurantReviews } from '../api/restaurants';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const RestaurantDetail = ({ restaurant, open, onClose }) => {
    const classes = useStyles()

    // const [photos, setPhotos] = useState([])
    const [review, setReviews] = useState([])

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await getRestaurantReviews(restaurant.id)
            setReviews(res.user_reviews)
        }

        if (open) {
            fetchReviews()
        }

    }, [open])

    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={onClose}
            BackdropComponent={Backdrop}
        >
            <div className={classes.paper}>
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

                {/* <Grid container spacing={1}>
                    {restaurant.highlights.map(highlight =>
                        <Grid item>
                            {highlight}
                        </Grid>
                    )}
                </Grid> */}
            </div>
        </Modal>
    )
}

export default RestaurantDetail