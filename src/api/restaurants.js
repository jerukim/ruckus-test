import { apiEndpoint } from '../constants'
import { apiToken } from '../secrets'

import restaurants from '../seed/restaurants.json'

// default to new york and 
export const getRestaurants = async () => {
    try {
        // const res = await fetch(`${apiEndpoint}?entity_id=94741&entity_type=zone&q=Manhattan%2C%20New%20York%20City&cuisines=55`, {
        //     headers: {
        //         'content-type': 'application/json',
        //         'user-key': apiToken
        //     }
        // })

        // return res.json()

        return restaurants
    } catch (error) {
        console.log(error)
    }
}