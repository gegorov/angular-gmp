import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { StoreFacadeService, IUserLogin } from "../core/index";


@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent {
    private router: Router;

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
        // public authService: AuthService;

    public storeFacadeService: StoreFacadeService;

    constructor(router: Router, storeFacadeService: StoreFacadeService) {
        this.router = router;
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

}
