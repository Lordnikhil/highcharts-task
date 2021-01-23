import chartDataReducer from './data'
import loggedReducer from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    chartData :chartDataReducer,
    isLogged :loggedReducer
})

export default allReducers;