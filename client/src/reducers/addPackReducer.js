import { ADD_PACK_ITEM } from '../actions/types.js';

// Pack Items that come from actions
const initialState = {
    packItems: [],
    packItem: {}
}

// Evaluates what type we are dealing with
export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}