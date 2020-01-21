/* tslint:disable:typedef */
import { Action, createReducer, on } from "@ngrx/store";

import * as AuthActions from "../actions/auth.actions";
import { IUser } from "../../models/index";


export interface AuthState {
    token: string;
    user: IUser | null;
    errorMessage: string | null;
}

const initialState: AuthState = {
    token: null,
    user: null,
    errorMessage: null
};

export const authKey = "auth";

const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccessful, (state, { token }) => ({ ...state, errorMessage: null, token })),
    on(AuthActions.loginFailed, (state, { errorMessage }) => ({ ...state, errorMessage, token: null })),
    on(AuthActions.getUserSuccessful, (state, { user }) => ({ ...state, user })),
    on(AuthActions.getUserFailed, (state, { errorMessage }) => ({ ...state, errorMessage, token: null })),
    on(AuthActions.logout, () => ({ ...initialState})),
    )
;

export function reducer(state: AuthState, action: Action) {
    return authReducer(state, action);
}
