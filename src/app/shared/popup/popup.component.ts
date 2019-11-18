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

    public courseId: number;

    public data: any;

    public courseService: CourseService;

    public course: Observable<ICourse>;

    constructor(@Inject(MAT_DIALOG_DATA) data: any, courseService: CourseService) {
        this.courseService = courseService;
        this.data = data;
        this.courseId = data.id;

    }

    public delete() {
        console.log("DElete", this.courseId)
        this.courseService.removeCourse(this.courseId);
    }

    ngOnInit() {
        this.course = this.courseService.getCourse(this.data.id);
    }

}
