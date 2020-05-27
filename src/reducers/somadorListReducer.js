import { ADD_VALUE } from "../actions";

let nextId = 1;

const somadorListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_VALUE:
            const newValue = {
                id: nextId++,
                value: action.value
            }
            return [...state, newValue];
        default:
            return state;
    }
}

export default somadorListReducer;