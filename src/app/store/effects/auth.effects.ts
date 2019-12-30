import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { API_URL, storageKey } from "../../core/constants/index";

import { IUserLogin, IUser, IAuthResponse, AuthService } from "../../core/index";
import * as AuthActions from "../actions/auth.actions";


@Injectable()
export class AuthEffects {
    private actions$: Actions;
    private authService: AuthService;
    private router: Router;
    private http: HttpClient;

    constructor(
        actions$: Actions,
        authService: AuthService,
        http: HttpClient,
        router: Router
    ) {
        this.actions$ = actions$;
        this.authService = authService;
        this.http = http;
        this.router = router;
    }

    authLogin$ = createEffect(
        () => this.actions$.pipe(
            tap((data) => {
                console.log("Effects!", data);
            }),
            ofType(AuthActions.login),
            tap(() => {
                console.log("Effects catched!");
            })

            // exhaustMap(action => {
            //     return this.http.post(`${API_URL}/auth/login`, action.credentials).pipe(
            //         tap((data: IAuthResponse) => {
            //             console.log({ data });
            //             const { token } = data;
            //             this.authService.setAuthToken(token);
            //         }),
            //         switchMap(({ token }) => {
            //             return this.authService.getUserInfoFromBackend(token);
            //         }),
            //         tap((data) => {
            //             localStorage.setItem(storageKey, JSON.stringify(data));
            //         }),
            //         map((user: IUser) => AuthActions.getUserSuccessful({ user })),
            //         catchError(error => {
            //             return of(AuthActions.getUserFailed({ errorMessage: error.message }));
            //         })
            //     );
            // })
        )
    );
}
