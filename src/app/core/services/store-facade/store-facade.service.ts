import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { IUserLogin } from "../../models/user-login.interface";

import * as fromApp from "../../../store/app.reducer";
import * as AuthActions from "../../../store/actions/auth.actions";

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

}
