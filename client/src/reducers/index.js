import { combineReducers } from 'redux';
import packItemsReducer from './packItemsReducer';
import photoItemsReducer from './photoItemsReducer';

export default combineReducers({
    packItems: packItemsReducer,
    photoItems: photoItemsReducer
})