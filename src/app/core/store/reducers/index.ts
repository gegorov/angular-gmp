import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers
} from "@ngrx/store";

import * as fromAuth from "./auth.reducers";


export const authFeatureKey: string = "auth";

export interface AppState {
    auth: fromAuth.State;
}

export function reducers(state: AppState | undefined, action: Action) {
    return combineReducers({
        [authFeatureKey]: fromAuth.reducer
    })(state, action);
}
