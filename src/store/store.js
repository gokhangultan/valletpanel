import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { globalReducer } from "./reducers/GlobalReducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    global: globalReducer,

})

export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);