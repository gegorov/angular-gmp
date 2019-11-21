import { AfterContentChecked, Component } from "@angular/core";
import { AuthService } from "../../../core/index";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    /**
     * placeholder for template.
     */
    public $user: Observable<string>;

    public $isAuthenticated: Observable<boolean>;

    private authService: AuthService;
    private router: Router;

    /**
     * method that calls logout method of AuthService
     */
    public logoff(): void {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
        this.$isAuthenticated = this.authService.getAuthStatus();
        this.$user = this.authService.getUserInfo().pipe(tap(data => (console.log("user: ", data))));
    }
}
