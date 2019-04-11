//This file combines the multiple reducers you may have

import {combineReducers} from 'redux'
import bucketingReducer from './bucketingReducer'


export default combineReducers({
    bucketing:bucketingReducer
});