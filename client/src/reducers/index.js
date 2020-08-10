import { combineReducers } from 'redux';
import addPackItemReducer from './addPackItemReducer';

export default combineReducers({
    packItems: addPackItemReducer
})