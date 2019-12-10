import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./states/root/reducer";

export const initStore = (initialState: any) => {
    return createStore(rootReducer, initialState, composeWithDevTools(
        applyMiddleware(thunkMiddleware)))
}