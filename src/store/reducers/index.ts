import {combineReducers} from "redux";
import {store} from "../index";

export const rootReducer = combineReducers({

})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof store.dispatch>
