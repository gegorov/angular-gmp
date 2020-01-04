import { Injectable } from "@angular/core";
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

    constructor(store: Store<fromApp.AppState>) {
        this.store = store;
    }

    public login(credentials: IUserLogin) {
        this.store.dispatch(AuthActions.login({ credentials }));
    }

    public logout() {
        this.store.dispatch(AuthActions.logout());
    }

    public isAuthenticated(): Observable<boolean> {
        return this.store.pipe(
            select(fromAuth.selectAuthTokenState),
            map(value => !!value)
        );
    }

    public getCurrentUser(): Observable<IUser> {
        return this.store.pipe(
            select(fromAuth.selectAuthUserState)
        );
    }

}
