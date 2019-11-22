import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { AuthService } from "../../../core/index";
import { tap } from "rxjs/operators";

@Directive({
    selector: "[appIsAuthorized]"
})
export class IsAuthorizedDirective implements OnInit, OnDestroy {

    private readonly templateRef: TemplateRef<any>;

    private viewContainerRef: ViewContainerRef;

    private authSubscription: Subscription;

    private hasView: boolean = false;

    private authService: AuthService;

    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, authService: AuthService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.authService = authService;
    }

    public ngOnInit(): void {
        this.authSubscription = this.authService.getAuthStatus().pipe(
            tap((isAuthorized) => {
                console.log("isAuthorized: ", isAuthorized);
                if (isAuthorized && !this.hasView) {
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                    this.hasView = true;
                } else if (!isAuthorized && this.hasView) {
                    this.viewContainerRef.clear();
                    this.hasView = false;
                }
            })
        ).subscribe();
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }


}
