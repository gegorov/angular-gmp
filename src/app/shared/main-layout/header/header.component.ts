import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../core/index";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    /**
     * placeholder for template.
     */
    public user$: Observable<string>;

    /**
     * observable with auth status
     */
    public isAuthenticated$: Observable<boolean>;

    private authService: AuthService;

    private router: Router;

    /**
     * method that calls logout method of AuthService
     */
    public logoff(): void {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }

    public ngOnInit(): void {
        this.isAuthenticated$ = this.authService.getAuthStatus();
        this.user$ = this.authService.getUserInfo();
    }

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }
}
