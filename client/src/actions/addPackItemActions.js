import { ADD_PACK_ITEM } from './types';

export const addPackItem = () => dispatch => {
    console.log('fetching packItems...');
    // Change fetch line to current state
    fetch('./api/packItems')
        .then(res => res.json())
        .then(packItems => dispatch({
            type: ADD_PACK_ITEM,
            payload: packItems
        })
    );
}