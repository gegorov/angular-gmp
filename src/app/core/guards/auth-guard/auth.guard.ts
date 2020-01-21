import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { AuthService } from "../../services/index";
import { StoreFacadeService } from "../../store-facade/index";

@Injectable()
export class AuthGuard implements CanActivate {
    private authService: AuthService;
    private router: Router;
    private storeFacadeService: StoreFacadeService;

    constructor(authService: AuthService, router: Router, storeFacadeService: StoreFacadeService) {
        this.authService = authService;
        this.router = router;
        this.storeFacadeService = storeFacadeService;
    }

    /**
     * implementation of CanActivate
     */
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.storeFacadeService.getToken().pipe(
            map(token => !!token),
            tap(token => {
                if (!token) {
                    this.router.navigate(["login"], { queryParams: { loginAgain: true } });
                }
            })
        );
    }
}
