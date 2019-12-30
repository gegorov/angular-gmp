import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";

import * as fromApp from "../store/app.reducer";
import { AuthService, StoreFacadeService, IUser, IUserLogin } from "../core/index";


@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit, OnDestroy {
    private router: Router;
    private subscription: Subscription;
    private store: Store<fromApp.AppState>;

    /**
     * variable ot store user login from input
     */
    public loginName: string;

    /**
     * variable ot store user pass from input
     */
    public password: string;

    /**
     * variable ot store user login from input
     */
    public authService: AuthService;

    public storeFacadeService: StoreFacadeService;

    constructor(authService: AuthService, router: Router, store: Store<fromApp.AppState>, storeFacadeService: StoreFacadeService) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.storeFacadeService = storeFacadeService;
    }

    /**
     * method that calls login from auth service and navigates to proper route
     */
    public onSubmit(event) {
        event.preventDefault();
        const user: IUserLogin = {
            login: this.loginName,
            password: this.password
        };
        this.storeFacadeService.login(user);
    }

    public ngOnInit(): void {

        this.subscription = this.store.select("auth").pipe(
            tap((data) => {
                console.log("ngOnint login: ", data);
            }),
            map(authState => authState.isAuthenticated)
        ).subscribe((
            isAuthenticated
        ) => {
            if (isAuthenticated) {
                this.router.navigate(["/"]);
            }
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
