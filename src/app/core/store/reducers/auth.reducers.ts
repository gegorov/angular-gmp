import { on, createReducer, ActionReducer, Action } from "@ngrx/store";

import { IUser } from "../../models/index";
import { AuthActions } from "../actions/index";

export interface State {
    /**
     * is a user authenticated?
     */
    isAuthenticated: boolean;

    /**
     * if authenticated, there should be a user object
     */

    user: IUser | null;

    /**
     * error message
     */
    errorMessage: string | null;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export const reducer: ActionReducer<State, Action> = createReducer(
    initialState,
    on(AuthActions.login, (state, { user }) => ({ ...state, user })),
    on(AuthActions.loginSuccess, state => ({
        ...state,
        errorMessage: "",
        isAuthenticated: true,
    })),
    on(AuthActions.loginFailure, (state, { errorMessage }) => ({
        ...state,
        errorMessage,
        isAuthenticated: false,
    })),
    on(AuthActions.logout, () => initialState)
);

export const gertUser: any = (state: State) => state.user;
export const getErrorMessage: any = (state: State) => state.errorMessage;
export const getIsAuthenticated: any = (state: State) => state.isAuthenticated;
