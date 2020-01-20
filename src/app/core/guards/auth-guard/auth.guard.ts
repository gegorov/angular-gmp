import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap, take } from "rxjs/operators";

import { AuthService } from "../../services/index";
import { StoreFacadeService } from "../../store-facade/store-facade.service";

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
            take(1),
            switchMap((token: string) => {
                    if (!token) {
                        this.router.navigate(["login"], {
                            queryParams: {
                                loginAgain: true
                            }
                        });
                        return of(false);
                    }
                    return of(true);
                }
            ));
    }
}
