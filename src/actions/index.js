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


export const SET_TOTAL_VALUE = 'SET_TOTAL_VALUE'
export const setTotalValue = value => ({
    type: SET_TOTAL_VALUE,
    value
})