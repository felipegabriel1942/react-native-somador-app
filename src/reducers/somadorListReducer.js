import { ADD_VALUE } from "../actions";

let nextId = 1;

const somadorListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_VALUE:
            console.log('chegou no action de adicionar');
            const newValue = {
                id: nextId++,
                value: action.value
            }

            console.log(state);
            return [...state, newValue];
        default:
            return state;
    }
}

export default somadorListReducer;