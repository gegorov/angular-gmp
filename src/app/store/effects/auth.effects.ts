import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { API_URL, storageKey } from "../../core/constants/index";

import { IUserLogin, IUser, IAuthResponse, AuthService } from "../../core/index";
import * as AuthActions from "../actions/auth.actions";
import * as fromApp from "../app.reducer";
import * as fromAuth from "../reducers/auth.reducers";


@Injectable()
export class AuthEffects {


    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private http: HttpClient,
        private store: Store<fromApp.AppState>
    ) {
    }


    public authLogin$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.login),
            exhaustMap(({ credentials}: {credentials: IUserLogin})   => {
                return this.http.post(`${API_URL}/auth/login`, credentials).pipe(
                    switchMap((data: IAuthResponse) => {
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
                        return this.authService.getUserInfoFromBackend(token);
                    }),
                    map((user: IUser) => AuthActions.getUserSuccessful({ user })),
                    catchError(error => {
                        return of(AuthActions.getUserFailed({ errorMessage: error.message }));
                    })
                );
            })
        )
    );
}
