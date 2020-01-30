import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap, take, tap } from "rxjs/operators";

import { CourseService, ICourse, StoreFacadeService } from "../../core/index";

@Component({
    selector: "app-edit-course-page",
    templateUrl: "./edit-course-page.component.html",
    styleUrls: ["./edit-course-page.component.scss"]
})
export class EditCoursePageComponent implements OnInit {

    private courseService: CourseService;
    private storeFacadeService: StoreFacadeService;
    private route: ActivatedRoute;
    private router: Router;


    /**
     * variable to hold observable with course
     */
    public course$: Observable<ICourse>;

    constructor(
        courseService: CourseService,
        storeFacadeService: StoreFacadeService,
        route: ActivatedRoute,
        router: Router
    ) {
        this.courseService = courseService;
        this.storeFacadeService = storeFacadeService;
        this.route = route;
        this.router = router;
    }

    public ngOnInit() {
        this.course$ = this.storeFacadeService.getSingleCourse().pipe(
            take(1),
        );
    }

    /**
     * Method that emits updated course to parent component
     */
    public onEditNotify(course: ICourse) {
        this.courseService.updateCourses(course).pipe(
            tap(() => {
                this.router.navigate(["/"]);
            })
        ).subscribe();
    }
}
