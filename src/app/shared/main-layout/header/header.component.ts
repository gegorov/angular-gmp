import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "../../../core/index";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

    private authService: AuthService;
    private router: Router;

    /**
     * placeholder for template.
     */
    public user$: Observable<string>;

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    /**
     * method that calls logout method of AuthService
     */
    public logoff(): void {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }

    public ngOnInit(): void {
        this.user$ = this.authService.getUserInfo();
    }
}
