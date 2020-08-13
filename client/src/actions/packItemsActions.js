import { GET_PACK_ITEMS, CREATE_PACK_ITEM, DELETE_PACK_ITEM } from './types';

export const getPackItems = () => {
    console.log('fetching packItems...');
    return {
        type: GET_PACK_ITEMS
    }
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