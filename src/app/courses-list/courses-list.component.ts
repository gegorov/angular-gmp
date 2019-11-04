import { Component, OnInit } from "@angular/core";

import { CourseService, ICourse } from "../core/index";
import { Observable } from "rxjs";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {


    /**
     * Variable to store observable with courses
     */
    public courses$: Observable<Array<ICourse>>;

    private courseService: CourseService;

    constructor(courseService: CourseService) {
        console.log("Constructor");
        this.courseService = courseService;
    }

    /**
     * Function that receive course id if delete button is clicked
     * @param value id that is emitted by course component
     */
    public onNotify(value: number): void {
        console.log("Delete movie with ID# ", value);
    }

    /**
     * Load more button handler
     */
    public loadMore(): void {
        console.log("Load More!");
    }

    /**
     * In this method we set observable to this.courses$
     */
    public ngOnInit(): void {
        console.log("ngOnInit");
        this.courses$ = this.courseService.getCourses();
    }

}
