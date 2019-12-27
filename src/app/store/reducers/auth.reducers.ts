import { Action } from "@ngrx/store";

import { IUser } from "../../core/index";

export interface AuthState {
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

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export function authReducer(state: AuthState = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}


