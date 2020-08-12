import { ADD_PACK_ITEM, CREATE_PACK_ITEM } from './types';

export const addPackItem = () => dispatch => {
    console.log('fetching packItems...');
    // Change fetch line to current state
    fetch('./api/packItems')
        .then(res => res.json())
        .then(packItems => dispatch({
            type: ADD_PACK_ITEM,
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