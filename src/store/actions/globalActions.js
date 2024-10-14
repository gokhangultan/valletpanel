export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_LANGUAGE = "SET_LANGUAGE";


// Action to toggle dark mode
export const toggleDarkMode = () => ({
    type: TOGGLE_DARK_MODE,
});

// Action to set the language
export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
});