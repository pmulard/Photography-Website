import { ADD_PACK_ITEM } from './types';

export const addPackItem = () => dispatch => {
    fetch('api/photoInfo')
        .then(res => res.json())
        .then(packItems => dispatch({
            type: ADD_PACK_ITEM,
            payload: packItems
        })
    );
}