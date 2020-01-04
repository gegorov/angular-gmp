import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

import { StoreFacadeService } from "../../services/index";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private storeFacadeService: StoreFacadeService;
    private router: Router;

    constructor(storeFacadeService: StoreFacadeService, router: Router) {
        this.storeFacadeService = storeFacadeService;
        this.router = router;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return this.storeFacadeService.getToken().pipe(
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
                            this.router.navigate(["/login"]);
                        }
                        return throwError(error);
                    })
                );
            })
        );
    }
}

