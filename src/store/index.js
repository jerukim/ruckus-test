import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import restaurants from './restaurants'

const rootReducer = combineReducers({ restaurants })

const middleware = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, middleware)

export default store