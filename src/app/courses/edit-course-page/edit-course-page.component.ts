import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { CourseService, ICourse } from "../../core/index";

@Component({
    selector: "app-edit-course-page",
    templateUrl: "./edit-course-page.component.html",
    styleUrls: ["./edit-course-page.component.scss"]
})
export class EditCoursePageComponent implements OnInit {

    private courseService: CourseService;
    private route: ActivatedRoute;
    private router: Router;
    private course: ICourse;

    /**
     * variable to hold observable with course
     */
    public course$: Observable<ICourse>;

    constructor(
        courseService: CourseService,
        route: ActivatedRoute,
        router: Router
    ) {
        this.courseService = courseService;
        this.route = route;
        this.router = router;
    }

    public ngOnInit() {
        this.course$ = this.route.params.pipe(
            switchMap((params: Params) => {
                return this.courseService.getCourse(parseInt(params.id, 10));
            })
        ).pipe(
            tap((course: ICourse) => this.course = course)
        );
    }

    /**
     * Method that emits updated course to parent component
     */
    public onEditNotify(course: ICourse) {
        console.log("on edit Notify", course);
        this.courseService.updateCourses(course);
        this.router.navigate(["/"]);
    }
}
