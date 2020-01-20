import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap, map, take } from "rxjs/operators";

import { AuthService } from "../../services/index";
import { StoreFacadeService } from "../../store-facade/store-facade.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private authService: AuthService;
    private router: Router;
    private storeFacadeService: StoreFacadeService;

    constructor(authService: AuthService, router: Router, storeFacadeService: StoreFacadeService) {
        this.authService = authService;
        this.router = router;
        this.storeFacadeService = storeFacadeService;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.storeFacadeService.getToken().pipe(
            take(1),
            switchMap((token: string) => {
                let clonedReq: HttpRequest<any>;

                if (token) {
                    clonedReq = req.clone({
                        setHeaders: {
                            Authorization: token
                        }
                    });
                } else {
                    clonedReq = req.clone();
                }
                return next.handle(clonedReq).pipe(
                    catchError((error: HttpErrorResponse) => {
                        if (error.status === 401) {
                            this.storeFacadeService.logout();
                        }
                        return throwError(error);
                    })
                );
            })
        );
    }
}

