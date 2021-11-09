import {combineReducers} from "redux";
import {store} from "../index";
import {authReducer} from "./auth/authReducer";
import EventReducer from "./event/eventReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    events: EventReducer
})

export type RootState = ReturnType<typeof rootReducer>
//export type AppDispatch = ReturnType<typeof store.dispatch>
export type AppDispatch = typeof store.dispatch;
