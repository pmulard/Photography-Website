import { GET_PHOTO_ITEMS, LOADING_PHOTO_ITEMS } from '../actions/types.js';
const initialState = {
    photoItems: [],
    photoItem: {},
    loading: false
}

// Evaluates what type we are dealing with
export default function(state = initialState, action) {
    // Looks at addPackItemActions.js for type, then matches
    // payload. (Can call payload whatever you want)
    switch(action.type) {
        case GET_PHOTO_ITEMS:
            console.log('GET_PHOTO_ITEMS reducer executed.')
            // Returns state with items that have been fetched
            // Just updates state. Need to add functionality for updating database
            return {
                // Use spread operator because we can't directly change state
                // Need to make a copy of it
                ...state,
                photoItems: action.payload,
                loading: false
            };
        case LOADING_PHOTO_ITEMS:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
