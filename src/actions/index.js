export const ADD_VALUE = 'ADD_VALUE';
export const addValue = value => ({
    type: ADD_VALUE,
    value
});

export const SET_VALUE = 'SET_VALUE';
export const setValue = value => ({
    type: SET_VALUE,
    value
});

export const REMOVE_VALUE = 'REMOVE_VALUE'
export const removeValue = value => ({
    type: REMOVE_VALUE,
    value
});