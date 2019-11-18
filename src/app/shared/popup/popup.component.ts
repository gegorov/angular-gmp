import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { CourseService, ICourse } from "../../core/index";
import { Observable } from "rxjs";

@Component({
    selector: "app-popup",
    templateUrl: "./popup.component.html",
    styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {

    /**
     * variable to store courseId
     */
    public courseId: number;

    /**
     * var to store
     */
    public course$: Observable<ICourse>;

    private courseService: CourseService;

    constructor(@Inject(MAT_DIALOG_DATA) data: any, courseService: CourseService) {
        this.courseService = courseService;
        this.courseId = data.id;

    }

    public delete() {
        console.log("Delete", this.courseId);
        this.courseService.removeCourse(this.courseId);
    }

    ngOnInit() {
        this.course$ = this.courseService.getCourse(this.courseId);
    }

}
