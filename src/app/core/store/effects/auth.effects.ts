import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, switchMap, take, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { IUserLogin, IUser, IAuthResponse } from "../../models/index";
import { AuthService } from "../../services/index";
import { StoreFacadeService } from "../../store-facade/index";
import * as AuthActions from "../actions/auth.actions";


@Injectable()
export class AuthEffects {
    public authLogin$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(({ credentials }: { credentials: IUserLogin }) => {
                if (credentials) {
                    return this.authService.login(credentials).pipe(
                        exhaustMap((data: IAuthResponse) => {
                            this.storeFacadeService.loginSuccessful(data.token);
                            return of(AuthActions.getUser());
                        }),
                        catchError(error => {
                            return of(AuthActions.loginFailed({ errorMessage: error.message }));
                        })
                    );
                }
            })
        )
    );

    public getUser$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.getUser),
            switchMap(() => {
                return this.storeFacadeService.getToken().pipe(
                    switchMap((token) => {
                        return this.authService.getUserInfo(token);
                    }),
                    take(1),
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
            switchMap(() => this.storeFacadeService.getToken().pipe(
                tap((token: string) => {
                    if (token) {
                        this.router.navigate(["/"]);
                    }
                })
            )),
        ),
        { dispatch: false }
    );

    public authLogout: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                this.router.navigate(["/login"]);
            })
        ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthService,
        private storeFacadeService: StoreFacadeService
    ) {
    }
}
