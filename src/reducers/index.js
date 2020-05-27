import { combineReducers } from 'redux';

import somadorListReducer from './somadorListReducer';
import editingSomadorListReducer from './editingSomadorListReducer';

const rootReducer = combineReducers({
    values: somadorListReducer,
    editingValue: editingSomadorListReducer
});

export default rootReducer;