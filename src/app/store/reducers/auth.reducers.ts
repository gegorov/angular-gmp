/* tslint:disable:typedef */
import { Action, createReducer, on } from "@ngrx/store";

import * as AuthActions from "../actions/auth.actions";
import { IUser } from "../../core/index";


export interface AuthState {
    isAuthenticated: boolean;
    user: IUser | null;
    errorMessage: string | null;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

const authReducer = createReducer(
    initialState,
    on(AuthActions.loginFailed, (state, { errorMessage }) => ({ ...state, errorMessage, isAuthenticated: false })),
    on(AuthActions.getUserSuccessful, (state, {user} ) => ({...state, user, isAuthenticated: true})),
);

export const reducer = (state: AuthState, action: Action) => {
    return authReducer(state, action);
}


