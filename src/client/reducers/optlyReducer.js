import  { FETCH } from '../actions'

export default (state=[], action)=> {
    switch(action.type){
        case FETCH:
            return action.optlyInfo; 
        default:
            return state;
    }
}