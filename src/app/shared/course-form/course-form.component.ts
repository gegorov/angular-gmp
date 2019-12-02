import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService, ICourse } from "../../core/index";


@Component({
    selector: "app-course-form",
    templateUrl: "./course-form.component.html",
    styleUrls: ["./course-form.component.scss"]
})
export class CourseFormComponent {

    private courseService: CourseService;
    private router: Router;

    /**
     * Variable to store course title
     */
    public courseTitle: string = "";

    /**
     * Variable to store course description
     */
    public courseDescription: string = "";

    /**
     * Variable to store course duration
     */
    public courseDuration: number = 0;

    /**
     * Variable to store course date
     */
    public courseDate: Date = new Date();

    /**
     * Variable to store course author
     */
    public courseAuthors: string = "";


    constructor(courseService: CourseService, router: Router) {
        this.courseService = courseService;
        this.router = router;
    }

    /**
     * method that is called onSubmit
     */
    public onSubmit(event) {
        event.preventDefault();
        this.createCourse();
        this.router.navigate(["/"]);
    }

    /**
     * Method that is called on Cancel button click
     */
    public onCancel() {
        this.clearFields();
        this.router.navigate(["/"]);
    }

    private createCourse(): void {
        const course: ICourse = {
            creationDate: new Date(this.courseDate),
            description: this.courseDescription,
            duration: this.courseDuration,
            id: 0,
            title: this.courseTitle,
            topRated: false
        };

        this.courseService.addCourse(course);
        this.clearFields();
    }

    private clearFields(): void {
        this.courseAuthors = "";
        this.courseDate = new Date();
        this.courseDescription = "";
        this.courseDuration = 0;
        this.courseTitle = "";
    }

}
