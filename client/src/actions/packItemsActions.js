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
            })
        )
}

export const createPackItem = (packItem) => dispatch => {
    console.log('creating packItem...');
    axios
        .post('/api/packItems', packItem)
        .then(res => 
            dispatch({
                type: CREATE_PACK_ITEM,
                payload: res.data
            })
        )
}

export const deletePackItem = (id) => dispatch => {
    console.log('deleting packItem...');
    axios
        .delete(`/api/packItems/:${id}`)
        .then(res => {
            dispatch({
                type: DELETE_PACK_ITEM,
                payload: id
            })
        })
}

export const setPackItemsLoading = () => {
    return {
        type: LOADING_PACK_ITEMS
    }
}