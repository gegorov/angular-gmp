import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";

import { AuthService } from "../../../core/index";

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

    public ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }


}
