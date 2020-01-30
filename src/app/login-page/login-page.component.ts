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
     * variable to keep StoreFacadeService
     */
    public storeFacadeService: StoreFacadeService;

    /**
     * variable for loginForm FormGroup
     */
    public loginForm: FormGroup;

    constructor(router: Router, storeFacadeService: StoreFacadeService) {
        this.router = router;
        this.storeFacadeService = storeFacadeService;
    }

    /**
     * method that calls login from auth service and navigates to proper route
     */
    public onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }

        const user: IUserLogin = {
            login: this.loginForm.value.username,
            password: this.loginForm.value.password
        };

        this.storeFacadeService.login(user);
    }

    public ngOnInit(): void {
        this.loginForm = new FormGroup({
            // TODO: enable Validators.email for username later
            username: new FormControl("", [Validators.required, Validators.minLength(1)]),
            password: new FormControl("", [Validators.required, Validators.minLength(1)])
        });
    }
}
