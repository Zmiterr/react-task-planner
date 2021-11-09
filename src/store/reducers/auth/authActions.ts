import {AuthActionsTypes, setAuthInterface, setErrorInterface, setLoadingInterface, setUserInterface} from "./types";

import {AppDispatch} from "../index";
import axios from "axios";
import {UserInterface} from "../../../models/UserInterface";

export const AuthActions = {
    setAuth: (auth: boolean): setAuthInterface => ({type: AuthActionsTypes.SET_AUTH, payload: auth }),
    setLoading: (loading: boolean): setLoadingInterface => ({type: AuthActionsTypes.SET_LOADING, payload: loading }),
    setUser: (user: UserInterface): setUserInterface => ({type: AuthActionsTypes.SET_USER, payload: user }),
    setError: (error: string): setErrorInterface => ({type: AuthActionsTypes.SET_ERROR, payload: error }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActions.setLoading(true))
            setTimeout(async () => {
            const response = await axios.get<UserInterface[]>('./users.json')
            const mockUser = response.data.find(user=> user.username === username && user.password === password)
            if(mockUser) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', mockUser.username)
                dispatch(AuthActions.setAuth(true))
                dispatch(AuthActions.setUser(mockUser))

            } else {
                dispatch(AuthActions.setError('User is not found'))
            }

            }, 500)
        }catch (e){
            dispatch(AuthActions.setError(String(e)))
        }finally {
            dispatch(AuthActions.setLoading(false))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActions.setAuth(false))
            dispatch(AuthActions.setUser({} as UserInterface))

        }catch (e){
            dispatch(AuthActions.setError(String(e)))
        }
    }
}

