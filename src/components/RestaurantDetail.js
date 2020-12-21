import React, { useEffect, useState } from 'react'
import {
    makeStyles,
    Grid,
    Typography,
    Modal,
    Backdrop,
    Container,
    Divider,
    Chip,
    Avatar,
    Link
} from '@material-ui/core'
import Rating from './Rating'

import { getRestaurantReviews } from '../api/restaurants'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '80%',
        // height: '100%',
        maxHeight: '100%',
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

const RestaurantDetail = ({ restaurant, open, onClose }) => {
    const classes = useStyles()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await getRestaurantReviews(restaurant.id)
            setReviews(res.user_reviews)
        }
        if (open) {
            fetchReviews()
        }

    }, [open, restaurant.id])

    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={onClose}
            BackdropComponent={Backdrop}
        >
            <Container className={classes.paper} style={{ overflow: 'scroll' }}>
                <Grid container direction='column'  >
                    {/* HEADER */}
                    <Grid item container justify='space-between'>
                        <Grid item >
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

                        <Grid item>
                            <Grid item container direction='column'>
                                {restaurant.timings.split(',').map(hours =>
                                    <Typography>{hours}</Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Grid item container justify='space-between'>
                        {/* AMENITIES */}
                        <Grid item xs={8} container spacing={1}>
                            {restaurant.highlights.map(highlight =>
                                <Grid item>
                                    <Chip label={highlight} />
                                </Grid>
                            )}
                        </Grid>

                        <Grid item>
                            <Link href={restaurant.url}>Website</Link>
                            <Typography>{restaurant.phone_numbers}</Typography>
                            {restaurant.location.address.split(',').map(addressPart =>
                                <Typography>{addressPart}</Typography>
                            )}
                        </Grid>
                    </Grid>
                </Grid>


                <Divider />

                <Grid item>
                    <Typography>Reviews:</Typography>
                    {/* <div style={{ overflow: 'scroll' }} > */}
                    <Grid container direction='column' spacing={2} >
                        {reviews.map(({ review }) =>
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
                        )}
                    </Grid>
                    {/* </div> */}
                </Grid>

                {/* </Grid> */}
            </Container>
        </Modal >
    )
}

export default RestaurantDetail