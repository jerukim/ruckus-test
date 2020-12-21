import React from 'react'
import {
    makeStyles,
    useTheme,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core'
import Rating from './Rating'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 150
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    thumb: {
        height: 150,
        width: 150,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}))

const RestaurantItem = ({ restaurant }) => {
    const classes = useStyles()
    const theme = useTheme()

    const { thumb, featured_image } = restaurant

    const image = thumb || featured_image

    return (
        <Grid item xs={6}>
            <Card className={classes.root}>
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
        </Grid>
    )
}

export default RestaurantItem