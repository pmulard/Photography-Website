import { ADD_PACK_ITEM } from '../actions/types.js';

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
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}