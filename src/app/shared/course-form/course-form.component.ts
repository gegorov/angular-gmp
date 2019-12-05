import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService, ICourse } from "../../core/index";


@Component({
    selector: "app-course-form",
    templateUrl: "./course-form.component.html",
    styleUrls: ["./course-form.component.scss"]
})
export class CourseFormComponent {


    private courseBF: ICourse;
    private courseService: CourseService;
    private router: Router;

    /**
     * Setter to set course that is received from parent component to private
     * variable courseBF
     */
    @Input()
    public set course(course: ICourse) {

        if (!course) {
            this.clearFields(course);
            this.courseBF = course;
        } else {
            this.courseBF = course;
        }

    }

    /**
     * getter for courseBF
     */
    public get course(): ICourse {
        return this.courseBF;
    }


    constructor(courseService: CourseService, router: Router) {
        this.courseService = courseService;
        this.router = router;
    }

    private clearFields(course: ICourse): void {
        course.duration = 0;
        course.creationDate = "";
        course.description = "";
        course.title = "";
    }

}
