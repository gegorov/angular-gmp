import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ICourse, CourseService } from "../../core/index";

@Component({
    selector: "app-add-course-page",
    templateUrl: "./add-course-page.component.html",
    styleUrls: ["./add-course-page.component.scss"]
})
export class AddCoursePageComponent {
    private courseService: CourseService;
    private router: Router;

    /**
     * Variable with dummy course that ill be passed to form-component to be filled
     */
    public course: ICourse = {
        id: NaN,
        topRated: false,
        duration: 0,
        creationDate: (new Date(Date.now())).toUTCString(),
        description: "",
        title: ""
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
        this.courseService.addCourse(course);
        this.router.navigate(["/"]);
    }
}
