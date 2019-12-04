import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, filter, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class BreadcrumbsService {

    private router: Router;
    private activatedRoute: ActivatedRoute;
    private breadcrumbs: Array<string>;
    private breadCrumbsSubject: BehaviorSubject<Array<string>>;

    constructor(activatedRoute: ActivatedRoute, router: Router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadCrumbsSubject = new BehaviorSubject<Array<string>>([""]);
        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd),
            distinctUntilChanged(),
            tap(() => {
                this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
                this.breadCrumbsSubject.next(this.breadcrumbs);
            })
        ).subscribe();
    }

    /**
     * function that creates breadcrumbs
     */
    public buildBreadCrumb(route: ActivatedRoute, breadcrumbs: Array<string> = []): Array<string> {
        let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : "";
        const path: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : "";
        const lastRoutePart: string = path.split("/").pop();
        const isDynamicRoute: boolean = lastRoutePart.startsWith(":");
        if (isDynamicRoute && !!route.snapshot) {
            label = "Edit Course";
        }

        const newBreadcrumbs: Array<string> = label ? [...breadcrumbs, label] : [...breadcrumbs];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }

    /**
     * function that returns Observable with breadcrumbs
     */
    public getBreadCrumbs(): Observable<Array<string>> {
        return  this.breadCrumbsSubject.asObservable();
    }
}
