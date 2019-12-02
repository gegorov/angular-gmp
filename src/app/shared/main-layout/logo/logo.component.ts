import { Component } from "@angular/core";

@Component({
    selector: "app-logo",
    templateUrl: "./logo.component.html",
    styleUrls: ["./logo.component.scss"]
})
export class LogoComponent {
    /**
     * variable to hold url for logo
     */
    public imageUrl = "../../../../assets/img/logo.png";
}
