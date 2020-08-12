import { combineReducers } from 'redux';
import packItemsReducer from './packItemsReducer';
// import getPhotoInfoReducer from './getPhotoInfoReducer';

export default combineReducers({
    packItems: packItemsReducer,
})