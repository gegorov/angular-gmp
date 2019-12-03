import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";


import {BreadcrumbsService} from "../../core/index";


@Component({
    selector: "app-breadcrumbs",
    templateUrl: "./breadcrumbs.component.html",
    styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent implements OnInit {

    private router: Router;
    private activatedRoute: ActivatedRoute;

    private breadcrumbsService: BreadcrumbsService;

    /**
     * placeholder for future breadcrumbs
     */
    public breadcrumbs$: Observable<Array<string>>;

    constructor(router: Router, activatedRoute: ActivatedRoute, breadcrumbsService: BreadcrumbsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;

        this.breadcrumbsService = breadcrumbsService;
    }

    public ngOnInit(): void {
     this.breadcrumbs$ = this.breadcrumbsService.getBreadCrumbs();
    }



}
