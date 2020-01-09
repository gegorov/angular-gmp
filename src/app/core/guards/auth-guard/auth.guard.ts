import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


import { AuthService } from "../../services/index";


@Injectable()
export class AuthGuard implements CanActivate {
    private authService: AuthService;
    private router: Router;

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    /**
     * implementation of CanActivate
     */
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        const token: string = this.authService.getAuthToken();
        console.log("inside CanActivate token: ", token);
        if (!token) {
            this.router.navigate(["login"], {
                queryParams: {
                    loginAgain: true
                }
            });
            return false;
        }
        return true;
    }
}
