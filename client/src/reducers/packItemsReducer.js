import { GET_PACK_ITEMS, CREATE_PACK_ITEM, DELETE_PACK_ITEM } from '../actions/types.js';

// Pack Items that come from actions
const initialState = {
    packItems: [],
    packItem: {}
}

// Evaluates what type we are dealing with
export default function(state = initialState, action) {
    // Looks at addPackItemActions.js for type, then matches
    // payload. (Can call payload whatever you want)
    switch(action.type) {
        case GET_PACK_ITEMS:
            console.log('GET_PACK_ITEMS reducer executed.')
            // Returns state with items that have been fetched
            // Just updates state. Need to add functionality for updating database
            return {
                // Use spread operator because we can't directly change state
                // Need to make a copy of it
                ...state
            };
        case CREATE_PACK_ITEM:
            console.log('CREATE_PACK_ITEM reducer executed.')
            return {
                ...state,
                packItems: [action.payload, ...state.packItems]
            };
        case DELETE_PACK_ITEM:
            console.log('DELETE_PACK_ITEM reducer executed.')
            return {
                ...state,
                packItems: state.packItems.filter(packItem => packItem.url !== action.payload)
            };
        default:
            return state;
    }
}