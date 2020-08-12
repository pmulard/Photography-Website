import { combineReducers } from 'redux';
import addPackItemReducer from './addPackItemReducer';
// import getPhotoInfoReducer from './getPhotoInfoReducer';

export default combineReducers({
    packItems: addPackItemReducer,
})