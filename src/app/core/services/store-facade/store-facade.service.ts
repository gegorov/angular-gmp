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

    public login(credentials: IUserLogin) {
        this.store.dispatch(AuthActions.login({ credentials }));

    }

    public logout() {
        console.log("truing to logout")
        this.store.dispatch(AuthActions.logout());
    }

    public isAuthenticated(): Observable<boolean> {
        return this.store.pipe(
            select(fromAuth.selectAuthTokenState),
            map(value => !!value)
        );
    }

    public getToken(): Observable<string> {
        return this.store.pipe(
            select(fromAuth.selectAuthTokenState),
        );
    }

    public getCurrentUser(): Observable<IUser> {
        return this.store.pipe(
            select(fromAuth.selectAuthUserState)
        );
    }

}
