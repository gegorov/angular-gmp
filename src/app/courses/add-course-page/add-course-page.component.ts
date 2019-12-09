import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { ICourse, CourseService } from "../../core/index";

@Component({
    selector: "app-add-course-page",
    templateUrl: "./add-course-page.component.html",
    styleUrls: ["./add-course-page.component.scss"]
})
export class AddCoursePageComponent {
    private courseService: CourseService;
    private router: Router;
    private subscription: Subscription;

    /**
     * Variable with dummy course that ill be passed to form-component to be filled
     */
    public course: ICourse = {
        id: NaN,
        topRated: false,
        length: 0,
        date: (new Date(Date.now())).toUTCString(),
        description: "",
        name: ""
    };

    constructor(
        courseService: CourseService,
        router: Router
    ) {
        this.courseService = courseService;
        this.router = router;
    }

    /**
     * method that is called onSubmit
     */
    public onAddNotify(course: ICourse) {
        this.courseService.addCourse(course).subscribe(
            (data) => {
                console.log("[onAddNotify]: ", data);
                this.router.navigate(["/"]);
            }
        );
    }
}
