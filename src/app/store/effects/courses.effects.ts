import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { combineLatest, Observable, of, zip } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";

import { CourseService, StoreFacadeService, ICourse } from "../../core/index";
import * as CourseActions from "../actions/courses.actions";

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private courseService: CourseService,
        private storeFacadeService: StoreFacadeService
    ) {
    }

    public loadCourses$L: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseActions.loadCourses),
            switchMap(
                () => combineLatest(this.storeFacadeService.getQuery(), this.storeFacadeService.getCoursesAmount())
            ),
            switchMap(value => {
                console.log("loadCourses: ", value);
                const [query, amount]: [string, number] = value;
                return this.courseService.fetchData(query, amount);
            }),
            switchMap((courses: Array<ICourse>) => of(CourseActions.loadCoursesSuccess({ courses }))),
            catchError(error => of(CourseActions.loadCoursesFail({ errorMessage: error.message })))
        )
    );
}
