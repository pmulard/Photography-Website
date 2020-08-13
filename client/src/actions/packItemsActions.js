import axios from 'axios';
import { GET_PACK_ITEMS, CREATE_PACK_ITEM, DELETE_PACK_ITEM, LOADING_PACK_ITEMS } from './types';

export const getPackItems = () => dispatch => {
    console.log('fetching packItems...');
    dispatch(setPackItemsLoading());
    axios
        .get('/api/packItems')
        .then(res => 
            dispatch({
                type: GET_PACK_ITEMS,
                payload: res.data
            }))
}

export const createPackItem = (packItem) => {
    console.log('creating packItem...');
    return {
        type: CREATE_PACK_ITEM,
        payload: packItem
    }
}

export const deletePackItem = (url) => {
    console.log('deleting packItem...');
    return {
        type: DELETE_PACK_ITEM,
        payload: url
    }
}

export const setPackItemsLoading = () => {
    return {
        type: LOADING_PACK_ITEMS
    }
}