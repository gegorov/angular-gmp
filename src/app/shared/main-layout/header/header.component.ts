import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { StoreFacadeService } from "../../../core/index";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

    private storeFacadeService: StoreFacadeService;
    private router: Router;

    /**
     * placeholder for template.
     */
    public user$: Observable<string>;

    constructor(storeFacadeService: StoreFacadeService, router: Router) {
        this.storeFacadeService = storeFacadeService;
        this.router = router;
    }

    /**
     * method that calls logout method of AuthService
     */
    public logout(): void {
        this.storeFacadeService.logout();
        this.router.navigate(["/login"]);
    }

    public ngOnInit(): void {
        this.user$ = this.storeFacadeService.getCurrentUser().pipe(
            tap(data => console.log("Header: ", data)),
            map(user => {
                if (user) {
                    return `${user.name.first} ${user.name.last}`;
                }
            })
        );
    }
}
