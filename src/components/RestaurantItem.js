import React, { useState } from 'react'
import {
    makeStyles,
    Grid,
    Card,
    CardMedia,
    Typography,
} from '@material-ui/core'
import RestaurantInfo from './RestaurantInfo'
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
        <Grid item sm={12} md={6} style={{ width: '100%' }}>
            <Card className={classes.root} onClick={openModel}>
                <Grid container spacing={2}>
                    <Grid item>
                        <CardMedia
                            className={classes.thumb}
                            image={image}
                        />
                    </Grid>

                    <RestaurantInfo xs={6} sm={5} md={6} lg={5} restaurant={restaurant} />

                    <Grid item xs={3} md={3} container direction='column'>
                        <Grid item>
                            <Typography variant="subtitle1">
                                {restaurant.phone_numbers}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                {restaurant.location.address.split(',')[0]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>

            <RestaurantDetail
                restaurant={restaurant}
                open={modalShowing}
                onClose={closeModel}
            />
        </Grid>
    )
}

export default RestaurantItem