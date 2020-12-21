import * as api from '../api'

// INITAL STATE
const initialState = []

// ACTION TYPES
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS'

// ACTIONS
export const receiveRestaurants = (payload) => ({
    type: RECEIVE_RESTAURANTS,
    payload
})

// THUNKS
export const getRestaurants = () => async dispatch => {
    try {
        const res = await api.restaurants.getRestaurants()

        dispatch(receiveRestaurants(res.restaurants))
    } catch (error) {
        console.log(error)
    }
}

// REDUCER
const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.payload.map(({ restaurant }) => restaurant)
        default:
            return state
    }
}

export default restaurantsReducer

// SELECTORS