import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "../../services/index";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private authService: AuthService;
    private router: Router;

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let clonedReq: HttpRequest<any>;

        if (this.authService.isAuthenticated()) {
            clonedReq = req.clone({
                setHeaders: {
                    Authorization: this.authService.authToken
                }
            });
        } else {
            clonedReq = req.clone();
        }

        return next.handle(clonedReq).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log("[Interceptor Error]", error);
                if (error.status === 401) {
                    this.authService.logout();
                    this.router.navigate(["/login"]);
                }
                return throwError(error);
            })
        );
    }

}
