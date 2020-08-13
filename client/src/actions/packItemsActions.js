import { GET_PACK_ITEMS, CREATE_PACK_ITEM, DELETE_PACK_ITEM } from './types';

export const getPackItems = () => dispatch => {
    console.log('fetching packItems...');
    // Change fetch line to current state
    fetch('./api/packItems')
        .then(res => res.json())
        .then(packItems => dispatch({
            type: GET_PACK_ITEMS,
            payload: packItems
        }));
}

export const createPackItem = (packItemData) => dispatch => {
    console.log('creating new packItem...');
    fetch('./api/packItems', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(packItemData)
    })
        .then(res => res.json())
        .then(packItem => dispatch({
            type: CREATE_PACK_ITEM,
            payload: packItem
        }));
}

export const deletePackItem = (url) => {
    console.log('deleting packItem...');
    return {
        type: DELETE_PACK_ITEM,
        payload: url
    }
}