import { combineReducers } from 'redux'

import startPage from './startPage'
import threeApp from './threeApp'

const rootReducer = combineReducers({
    startPage,
    threeApp,
})

export default rootReducer