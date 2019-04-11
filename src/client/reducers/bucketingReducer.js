import  { BUCKETING } from '../actions'

export default (state=[], action)=> {
    switch(action.type){
        case BUCKETING:
            return action.bucketing; 
        default:
            return state;
    }
}