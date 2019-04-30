//This file combines the multiple reducers you may have

import {combineReducers} from 'redux'
import optlyReducer from './optlyReducer'


export default combineReducers({
    optlyInfo:optlyReducer
});