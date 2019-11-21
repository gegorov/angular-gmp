import { Component } from "@angular/core";
import { AuthService, IUser } from "../core/index";
import { Router } from "@angular/router";


@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent {

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

    private router: Router;

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    /**
     * method that calls login from auth service and navigates to proper route
     */
    public onSubmit(event) {
        event.preventDefault();
        const user: IUser = {
            id: 0,
            login: this.loginName,
            password: this.password
        };
        this.authService.login(user);
        this.router.navigate(["/"]);
    }
}
