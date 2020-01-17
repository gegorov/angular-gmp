import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUserLogin } from "../../models/user-login.interface";

import * as fromApp from "../../../store/app.reducer";
import * as fromAuth from "../../../store/reducers/auth.reducers";
import * as AuthActions from "../../../store/actions/auth.actions";
import { IUser } from "../../models/user.interface";

@Injectable({
    providedIn: "root"
})
export class StoreFacadeService {
    private store: Store<fromApp.AppState>;
    private router: Router;

    constructor(router: Router, store: Store<fromApp.AppState>) {
        this.store = store;
        this.router = router;
    }

    /**
     * function that triggers login
     */
    public login(credentials: IUserLogin) {
        this.store.dispatch(AuthActions.login({ credentials }));

    }

    /**
     * function that triggers logout
     */
    public logout() {
        this.store.dispatch(AuthActions.logout());
    }

    /**
     * function that returns authentication status
     */
    public isAuthenticated(): Observable<boolean> {
        return this.store.pipe(
            select(fromAuth.selectAuthTokenState),
            map(value => !!value)
        );
    }

    /**
     * function that returns token
     */
    public getToken(): Observable<string> {
        return this.store.pipe(
            select(fromAuth.selectAuthTokenState)
        );
    }

    /**
     * function that returns current user
     */
    public getCurrentUser(): Observable<IUser> {
        return this.store.pipe(
            select(fromAuth.selectAuthUserState)
        );
    }

    /**
     * function that triggers loginSuccessful action
     */
    public loginSuccessful(token: string): void {
        this.store.dispatch(AuthActions.loginSuccessful({ token }));
    }

}
