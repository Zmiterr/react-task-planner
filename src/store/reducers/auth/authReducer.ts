import {AuthActionsTypes, setAuthInterface, setErrorInterface, setLoadingInterface, setUserInterface} from "./types";
import {UserInterface} from "../../../models/UserInterface";

interface authState {
    isAuth: boolean;
    user: UserInterface
    isLoading: boolean
    error: string
}



type authAction = setAuthInterface | setErrorInterface | setUserInterface | setLoadingInterface

const initialState:authState = {
    isAuth: false,
    user: {} as UserInterface,
    isLoading: false,
    error: ''
}

export const authReducer = (state = initialState, action: authAction):authState => {
    switch (action.type){
        case AuthActionsTypes.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionsTypes.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionsTypes.SET_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionsTypes.SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}
