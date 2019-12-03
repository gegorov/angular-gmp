import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import { CourseService, ICourse } from "../../core/index";

@Component({
    selector: "app-edit-course-page",
    templateUrl: "./edit-course-page.component.html",
    styleUrls: ["./edit-course-page.component.scss"]
})
export class EditCoursePageComponent implements OnInit {

    private courseService: CourseService;
    private route: ActivatedRoute;

    /**
     * variable to hold observable with course
     */
    public course$: Observable<ICourse>;

    constructor(courseService: CourseService, route: ActivatedRoute) {
        this.courseService = courseService;
        this.route = route;
    }


    public ngOnInit() {
        this.course$ = this.route.params.pipe(
            switchMap((params: Params) => {
                return this.courseService.getCourse(parseInt(params.id, 10));
            })
        );
    }

}
