import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { globalReducer } from "./reducers/globalReducer";
import { thunk } from "redux-thunk";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
    global: globalReducer,
    users: usersReducer

})

export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);