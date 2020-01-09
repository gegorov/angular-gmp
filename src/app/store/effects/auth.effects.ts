import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { catchError, exhaustMap, map, mergeMap, switchMap, take, tap } from "rxjs/operators";
import { EMPTY, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { API_URL, storageKey } from "../../core/constants/index";
import { AuthService } from "../../core/index";
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
        private authService: AuthService,
        private store: Store<fromApp.AppState>
    ) {
    }


    public authLogin$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.login),

            switchMap(({ credentials }: { credentials: IUserLogin }) => {
                return this.http.post(`${API_URL}/auth/login`, credentials).pipe(
                    tap((data) => console.log("######BANG!!!, data: ", data)),
                    take(1),
                    tap((data: IAuthResponse) => {
                        this.authService.setAuthToken(data.token);
                    }),
                    exhaustMap((data: IAuthResponse) => {
                        this.store.dispatch(AuthActions.loginSuccessful({ token: data.token }));
                        return of(AuthActions.getUser());
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
            switchMap(() => {
                return this.store.pipe(
                    select(fromAuth.selectAuthTokenState),
                    switchMap((token) => {
                        return this.http.post<IUser>(`${API_URL}/auth/userinfo`, { token });
                    }),
                    switchMap((user: IUser) => {
                        return [AuthActions.getUserSuccessful({ user }), AuthActions.loginRedirect()];
                    }),
                    catchError(error => {
                        return of(AuthActions.getUserFailed({ errorMessage: error.message }));
                    })
                );
            })
        )
    );

    public getUserSuccess$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.loginRedirect),
            tap(() => {
                   const token: string = this.authService.getAuthToken();
                   if (token) {
                       this.router.navigate(["/"]);
                   }
                }
            )
        ),
        { dispatch: false }
    );

    public authLogout: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                this.router.navigate(["/login"]);
                this.authService.clearLocalStorage();
            }),
        ),
        { dispatch: false }
    );
}
