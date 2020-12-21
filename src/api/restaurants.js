import { apiEndpoint } from '../constants'
import { apiToken } from '../secrets'

export const getRestaurants = async () => {
    try {
        const res = await fetch(`${apiEndpoint}/search?entity_id=94741&entity_type=zone&q=Manhattan%2C%20New%20York%20City&cuisines=55`, {
            headers: {
                'content-type': 'application/json',
                'user-key': apiToken
            }
        })

        return res.json()

        // return restaurants
    } catch (error) {
        console.log(error)
    }
}

export const getRestaurantReviews = async (restaurantId) => {
    try {
        const res = await fetch(`${apiEndpoint}/reviews?res_id=${restaurantId}`, {
            headers: {
                'accept': 'application/json',
                'user-key': apiToken,
            },
        })

        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export const getRestaurantMenu = async (restaurantId) => {
    try {
        const res = await fetch(`${apiEndpoint}/dailymenu?res_id=${restaurantId}`, {
            headers: {
                'accept': 'application/json',
                'user-key': apiToken,
            },
        })

        return res.json()
    } catch (error) {
        console.log(error)
    }
}