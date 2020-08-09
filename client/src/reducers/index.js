import { combineReducers } from 'redux';
import addPackReducer from './addPackReducer';

export default combineReducers({
    packItem: addPackReducer
})