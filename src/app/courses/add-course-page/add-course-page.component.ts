import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICourse, CourseService } from "../../core/index";

@Component({
    selector: "app-add-course-page",
    templateUrl: "./add-course-page.component.html",
    styleUrls: ["./add-course-page.component.scss"]
})
export class AddCoursePageComponent {

    private courseService: CourseService;
    private router: Router;

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
        route: ActivatedRoute,
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
