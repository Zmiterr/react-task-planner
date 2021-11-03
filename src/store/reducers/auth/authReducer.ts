interface authState {
    isAuth: boolean;
}

interface setAuthInterface {
    type: AuthActionsTypes.SET_AUTH
    payload: boolean
}

type authAction = setAuthInterface

const initialState:authState = {
    isAuth: false
}

export enum AuthActionsTypes {
    SET_AUTH = 'SET_AUTH'
}

export const authReducer = (state = initialState, action: authAction):authState => {
    switch (action.type){
        case AuthActionsTypes.SET_AUTH:
            return {...state, isAuth: action.payload}

        default:
            return state
    }
}
