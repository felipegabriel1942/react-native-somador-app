import { combineReducers } from 'redux';

import somadorListReducer from './somadorListReducer';
import inputListReducer from './inputListReducer';

const rootReducer = combineReducers({
    values: somadorListReducer,
    editingValue: inputListReducer
});

export default rootReducer;