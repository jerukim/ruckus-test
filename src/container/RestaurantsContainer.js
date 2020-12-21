import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../store/restaurants'

import RestaurantsList from '../components/RestaurantsList'
import RestaurantItem from '../components/RestaurantItem'

import {
    Container,
    makeStyles,
    useTheme,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        width: '90%'
    },
    list: {
        display: 'flex'
    },
    item: {
        flex: '1'
    }
}))

const RestaurantsContainer = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    const restaurants = useSelector(state => state.restaurants)

    return (
        <Container className={classes.root}>
            <h3>Restaurants</h3>
            <RestaurantsList>
                {restaurants.map(restaurant =>
                    <RestaurantItem
                        key={restaurant.id}
                        restaurant={restaurant}
                    // onClick
                    />
                )}
            </RestaurantsList>
        </Container>
    )
}

export default RestaurantsContainer