/* tslint:disable:typedef */
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authKey, AuthState } from "../reducers/auth.reducers";

export const selectAuthState = createFeatureSelector(
    authKey,
);

export const selectAuthTokenState = createSelector(
    selectAuthState,
    (state: AuthState) => state.token,
);

export const selectAuthUserState = createSelector(
    selectAuthState,
    (state: AuthState) => state.user,
);
