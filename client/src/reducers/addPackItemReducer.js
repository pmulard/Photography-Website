import { ADD_PACK_ITEM, CREATE_PACK_ITEM } from '../actions/types.js';

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
        case ADD_PACK_ITEM:
            console.log('*** ADD_PACK_ITEM reducer executed ***')
            //returns state with items that have been fetched
            return {
                ...state,
                packItems: action.payload
            };
        case CREATE_PACK_ITEM:
            console.log('*** CREATE_PACK_ITEM reducer executed ***')
            //returns state with items that have been fetched
            return {
                // Just updates the state - need to add code for updating database
                ...state,
                packItem: action.payload
            };
        default:
            return state;
    }
}