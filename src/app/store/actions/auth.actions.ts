/* tslint:disable:typedef */
import { createAction, props } from "@ngrx/store";
import { IUserLogin, IUser } from "../../core/index";


const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOGIN_FAILED = "LOGIN FAILED";
const LOGIN_SUCCESSFUL = "LOGIN SUCCESSFUL";
const GET_USER = "GET_USER";
const GET_USER_SUCCESSFUL = "GET_USER_SUCCESSFUL";
const GET_USER_FAILED = "GET_USER_FAILED";
const LOGIN_REDIRECT = "LOGIN_REDIRECT";


export const login = createAction(
    LOGIN,
    props<{ credentials: IUserLogin }>()
);

export const loginSuccessful = createAction(
    LOGIN_SUCCESSFUL,
    props<{ token: string }>()
);

export const loginFailed = createAction(
    LOGIN_FAILED,
    props<{ errorMessage: string }>()
);

export const getUser = createAction(
    GET_USER
);

export const getUserSuccessful = createAction(
    GET_USER_SUCCESSFUL,
    props<{ user: IUser }>()
);

export const loginRedirect = createAction(
    LOGIN_REDIRECT
);

export const getUserFailed = createAction(
    GET_USER_FAILED,
    props<{ errorMessage: string }>()
);

export const logout = createAction(
    LOGOUT
);



