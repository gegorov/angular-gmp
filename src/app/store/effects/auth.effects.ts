import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { API_URL, storageKey } from "../../core/constants/index";

import { IUserLogin, IUser, IAuthResponse } from "../../core/index";
import * as AuthActions from "../actions/auth.actions";
import * as fromApp from "../app.reducer";
import * as fromAuth from "../reducers/auth.reducers";


@Injectable()
export class AuthEffects {


    constructor(
        private actions$: Actions,
        private router: Router,
        private http: HttpClient,
        private store: Store<fromApp.AppState>
    ) {
    }


    public authLogin$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.login),

            mergeMap(({ credentials}: {credentials: IUserLogin})   => {
                return this.http.post(`${API_URL}/auth/login`, credentials).pipe(
                    tap(() => console.log("######BANG!!!")),
                    exhaustMap((data: IAuthResponse) => {
                        return [AuthActions.loginSuccessful({ token: data.token }), AuthActions.getUser()];
                    }),
                    catchError(error => {
                        return of(AuthActions.loginFailed({ errorMessage: error.message }));
                    }),
                    tap((data) => console.log("authLogin$ :", data))
                );
            })
        )
    );

    public getUser$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.getUser),
            exhaustMap(() => {
                return this.store.pipe(
                    select(fromAuth.selectAuthTokenState),
                    switchMap((token) => {
                        return this.http.post<IUser>(`${API_URL}/auth/userinfo`, { token });
                    }),
                    switchMap((user: IUser) => {
                        return of(AuthActions.getUserSuccessful({ user }));
                    }),
                    catchError(error => {
                        return of(AuthActions.getUserFailed({ errorMessage: error.message }));
                    })
                );
            })
        )
    );
}
