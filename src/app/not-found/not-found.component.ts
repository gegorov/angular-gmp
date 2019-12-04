import { Component } from "@angular/core";

@Component({
    selector: "app-not-found",
    templateUrl: "./not-found.component.html",
    styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent {
    /**
     * variable to hold 404 image url
     */
    public imageUrl: string = "../../assets/img/404.jpg";
}
