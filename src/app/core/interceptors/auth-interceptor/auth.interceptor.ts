import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

import { AuthService } from "../../services/index";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private authService: AuthService;
    private router: Router;

    constructor(authService: AuthService, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = this.authService.getAuthToken();
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
                    this.authService.clearLocalStorage();
                    this.router.navigate(["/login"]);
                }
                return throwError(error);
            })
        );
    }
}

