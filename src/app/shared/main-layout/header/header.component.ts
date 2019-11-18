import { AfterContentChecked, Component } from "@angular/core";
import { AuthService } from "../../../core/index";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements AfterContentChecked {
    /**
     * placeholder for template.
     */
    public user: string;

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

    }

    public checkStatus(): boolean {
        return this.authService.isAuthenticated();
    }

    public ngAfterContentChecked() {
        if (this.checkStatus()) {
            this.user = this.authService.getUserInfo();
        }
    }
}
