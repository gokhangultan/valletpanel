import {  TOGGLE_DARK_MODE, SET_LANGUAGE } from "../actions/globalActions";

const initialState = {
    darkMode: false,   // Initially, dark mode is false
    language: "TR",    // Default language is 'TR'
};

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};
