import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, ActivatedRoute, RouterEvent } from "@angular/router";
import { distinctUntilChanged, filter, tap } from "rxjs/operators";


@Component({
    selector: "app-breadcrumbs",
    templateUrl: "./breadcrumbs.component.html",
    styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent implements OnInit {

    private router: Router;
    private activatedRoute: ActivatedRoute;


    /**
     * placeholder for future breadcrumbs
     */
    public breadcrumbs: Array<string>;

    constructor(router: Router, activatedRoute: ActivatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    }

    public ngOnInit(): void {
        console.log("Breadcrumbs inititated");
        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd),
            distinctUntilChanged(),
        ).subscribe(() => {
            this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        });
    }

    public buildBreadCrumb(route: ActivatedRoute,  breadcrumbs: Array<string> = []): Array<string> {
        let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : "";
        const path: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : "";
        console.log("label:", label);
        console.log("path:", path);
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

}
