import { ADD_VALUE, REMOVE_VALUE } from "../actions";

let nextId = 1;

const somadorListReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_VALUE:
            const newValue = {
                id: nextId++,
                value: action.value
            }
            return [...state, newValue];
        case REMOVE_VALUE:
            state = state.filter(v => v.id != action.value.id);
            return state;
        default:
            return state;
    }
}

export default somadorListReducer;