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
import { getRestaurantReviews } from '../api/restaurants'
import Rating from './Rating'
import ReviewsList from './ReviewsList'
import ReviewItem from './ReviewItem'
import AmenitiesList from './AmenitiesList'
import AmenityItem from './AmenityItem'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '80%',
        maxHeight: '100%',
        backgroundColor: theme.palette.background.paper,
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
                                    <Typography key={hours}>{hours}</Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Grid item container justify='space-between'>

                        <AmenitiesList>
                            {restaurant.highlights.map(highlight =>
                                <AmenityItem key={highlight} amenity={highlight} />
                            )}
                        </AmenitiesList>

                        <Grid item>
                            <Link href={restaurant.url}>Website</Link>
                            <Typography>{restaurant.phone_numbers}</Typography>
                            {restaurant.location.address.split(',').map(addressPart =>
                                <Typography key={addressPart}>{addressPart}</Typography>
                            )}
                        </Grid>
                    </Grid>
                </Grid>

                <Divider />

                <Grid item>
                    <ReviewsList>
                        {reviews.map(({ review }) =>
                            <ReviewItem
                                key={review.id}
                                review={review}
                            />
                        )}
                    </ReviewsList>
                </Grid>
            </Container>
        </Modal >
    )
}

export default RestaurantDetail