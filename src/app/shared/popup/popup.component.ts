import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ICourse } from "../../core/index";


@Component({
    selector: "app-popup",
    templateUrl: "./popup.component.html",
    styleUrls: ["./popup.component.scss"]
})
export class PopupComponent {

    /**
     * variable to store courseId
     */
    public data: { course: ICourse };

    constructor(@Inject(MAT_DIALOG_DATA) data: { course: ICourse }) {
        this.data = data;
    }

}
