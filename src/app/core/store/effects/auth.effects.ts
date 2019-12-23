import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { IUserLogin } from "../../models/user-login.interface";
import { IUser } from "../../models/user.interface";


import { AuthService } from "../../services/index";
import { AuthActions } from "../actions/index";

@Injectable()
export class AuthEffects {
    private actions$: Actions;
    private authService: AuthService;
    private router: Router;

    constructor(
        actions$: Actions,
        authService: AuthService,
        router: Router
    ) {
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
    }

    // effects go here
    public login$ = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.login),
            map(action => action.credentials),
            exhaustMap(
                (userCredentials: IUserLogin) => this.authService.login(userCredentials)
                    .pipe(
                        map((user: IUser) => AuthActions.loginSuccess({ user })),
                        catchError(error => of(AuthActions.loginFailure({ errorMessage: error.message })))
                    )
            )
        ));

    public loginSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(() => this.router.navigate(["/courses"]))
        ),
        { dispatch: false }
    );

    public loginRedirect$ = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => this.router.navigate(["/login"]))
        )
    );

}
