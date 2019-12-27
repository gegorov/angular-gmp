import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { IUserLogin, IUser, AuthService } from "../../core/index";




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



}
