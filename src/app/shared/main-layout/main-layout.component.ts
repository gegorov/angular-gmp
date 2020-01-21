import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { LoadingService } from "../../core/services/loading-service/loading.service";

@Component({
    selector: "app-main-layout",
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent implements OnInit {
    private loadingService: LoadingService;

    /**
     * Observable that is used to store Loader status
     */
    public loading$: Observable<boolean>;


    constructor(loadingService: LoadingService) {
        this.loadingService = loadingService;
    }

    public ngOnInit() {
        this.loading$ = this.loadingService.isLoading.asObservable();
    }
}
