import { combineReducers } from 'redux';

import somadorListReducer from './somadorListReducer';

const rootReducer = combineReducers({
    values: somadorListReducer
});

export default rootReducer;