import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { StoreFacadeService } from "../../services/index";


@Injectable()
export class AuthGuard implements CanActivate {
    private storeFacadeService: StoreFacadeService;
    private router: Router;

    constructor(storeFacadeService: StoreFacadeService, router: Router) {
        this.storeFacadeService = storeFacadeService;
        this.router = router;
    }

    /**
     * implementation of CanActivate
     */
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.storeFacadeService.isAuthenticated().pipe(
            tap((value) => {

                console.log("inside CanActivate: ", value);
                if (!value) {
                    this.router.navigate(["login"], {
                        queryParams: {
                            loginAgain: true
                        }
                    });
                }
            }));
    }
}
