import { combineReducers } from 'redux';
import addPackReducer from './addPackItemReducer';

export default combineReducers({
    packItem: addPackReducer
})