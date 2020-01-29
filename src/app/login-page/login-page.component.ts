import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { StoreFacadeService, IUserLogin } from "../core/index";


@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
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

    public loginForm: FormGroup;

    constructor(router: Router, storeFacadeService: StoreFacadeService) {
        this.router = router;
        this.storeFacadeService = storeFacadeService;
    }

    /**
     * method that calls login from auth service and navigates to proper route
     */
    public onSubmit() {
        // event.preventDefault();
        // const user: IUserLogin = {
        //     login: this.loginName,
        //     password: this.password
        // };
        // this.storeFacadeService.login(user);

        console.log("Form", this.loginForm);
    }

    public ngOnInit(): void {
        // TODO: Add Validators
        this.loginForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

}
