import { SET_VALUE, ADD_VALUE } from '../actions';

const INITAL_STATE = {
    id: null,
    value: 0
}

const editingSomadorListReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        case SET_VALUE: 
            return {
                ...state,
                value: action.value
            };
        case ADD_VALUE:
            return INITAL_STATE;
        default:
            return state;
    }
}

export default editingSomadorListReducer;