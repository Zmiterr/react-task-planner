import {combineReducers} from "redux";
import {store} from "../index";
import {authReducer} from "./auth/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>
//export type AppDispatch = ReturnType<typeof store.dispatch>
export type AppDispatch = typeof store.dispatch;
