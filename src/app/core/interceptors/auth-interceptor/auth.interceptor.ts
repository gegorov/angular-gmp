import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

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

        if (this.authService) {

        }

        return undefined;
    }

}
