import {UserInterface} from "../../../models/UserInterface";


export enum AuthActionsTypes {
    SET_AUTH = 'SET_AUTH',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER'
}

export interface setAuthInterface {
    type: AuthActionsTypes.SET_AUTH
    payload: boolean
}

export interface setLoadingInterface {
    type: AuthActionsTypes.SET_LOADING
    payload: boolean
}

export interface setUserInterface {
    type: AuthActionsTypes.SET_USER
    payload: UserInterface
}

export interface setErrorInterface {
    type: AuthActionsTypes.SET_ERROR
    payload: string
}
