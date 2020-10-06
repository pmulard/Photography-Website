import axios from 'axios';
import { GET_PHOTO_ITEMS, LOADING_PHOTO_ITEMS } from './types';

export const getPhotoItems = () => dispatch => {
    console.log('fetching photoItems...');
    dispatch(setPhotoItemsLoading());
    axios
        .get('/api/photoItems')
        .then(res => 
            dispatch({
                type: GET_PHOTO_ITEMS,
                payload: res.data
            })
        )
}

export const setPhotoItemsLoading = () => {
    return {
        type: LOADING_PHOTO_ITEMS
    }
}