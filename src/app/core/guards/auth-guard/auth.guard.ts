import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/index";
import { distinctUntilChanged, tap } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

    private authService: AuthService;
    private router: Router;
    private isAuthenticated: Observable<boolean>;

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = this.authService.getAuthStatus();
    }

    /**
     * implementation of CanActivate
     */
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.isAuthenticated.pipe(
            tap((value) => {
                if (!value) {
                    this.router.navigate(["/login"], {
                        queryParams: {
                            loginAgain: true
                        }
                    });
                    this.authService.clearLocalStorage();
                }
            }));
    }
}
