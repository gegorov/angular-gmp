import { createAction, props } from "@ngrx/store";
import { ActionCreator, TypedAction } from "@ngrx/store/src/models";

import { IUserLogin } from "../../models/user-login.interface";
import { IUser } from "../../models/user.interface";

enum AuthActionTypes {
    login = "[Auth] Login",
    loginSuccess = "[Auth] Login Success",
    loginFailure = "[Auth] Login Failure",
    logout = "[Auth] Logout",
}

type AuthActionFunction = ActionCreator<AuthActionTypes,
    (props: {
        credentials?: IUserLogin;
        user?: IUser,
        errorMessage?: string,
    }) => {
        credentials?: IUserLogin;
        user?: IUser;
        errorMessage?: string;
    } & TypedAction<AuthActionTypes>>;

export const login: AuthActionFunction = createAction(
    AuthActionTypes.login,
    props<{ credentials: IUserLogin }>()
);

export const loginSuccess: AuthActionFunction = createAction(
    AuthActionTypes.loginSuccess,
    props<{ user: IUser }>()
);

export const loginFailure: AuthActionFunction = createAction(
    AuthActionTypes.loginFailure,
    props<{ errorMessage: string }>()
);

export const logout: AuthActionFunction = createAction(
    AuthActionTypes.logout
);

