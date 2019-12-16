import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { LoadingService } from "../../services/index";
import { debounceTime, finalize } from "rxjs/operators";


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    private activeRequests: number = 0;
    private loadingService: LoadingService;

    constructor(loadingService: LoadingService) {
        this.loadingService = loadingService;
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.activeRequests === 0) {
            this.loadingService.startLoading();
        }

        this.activeRequests++;
        return next.handle(request).pipe(
            debounceTime(5000),
            finalize(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) {
                    this.loadingService.stopLoading();
                }
            })
        );
    }
}
