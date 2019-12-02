import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService, ICourse } from "../../core/index";


@Component({
    selector: "app-course-form",
    templateUrl: "./course-form.component.html",
    styleUrls: ["./course-form.component.scss"]
})
export class CourseFormComponent implements OnInit {

    /**
     * Variable to store course that is received from parent component
     */
    @Input() public course: ICourse;

    private courseService: CourseService;
    private router: Router;

    /**
     * Variable to store course title
     */
    public courseTitle: string;

    /**
     * Variable to store course description
     */
    public courseDescription: string;

    /**
     * Variable to store course duration
     */
    public courseDuration: number;

    /**
     * Variable to store course date
     */
    public courseDate: Date;

    /**
     * Variable to store course author
     */
    public courseAuthors: string;


    constructor(courseService: CourseService, router: Router) {
        this.courseService = courseService;
        this.router = router;
    }

    public ngOnInit(): void {
        if (!this.course) {
            this.clearFields();
        } else {
            this.courseDate = this.course.creationDate;
            this.courseDescription = this.course.description;
            this.courseDuration = this.course.duration;
            this.courseTitle = this.course.title;
        }
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
            title: this.courseTitle,
            topRated: false,
            id: NaN,
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
