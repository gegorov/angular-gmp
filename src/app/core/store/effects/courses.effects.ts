import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { combineLatest, Observable, of } from "rxjs";
import { switchMap, catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";

import { ICourse } from "../../models/index";
import { CourseService } from "../../services/index";
import { StoreFacadeService } from "../../store-facade/index";
import * as CourseActions from "../actions/courses.actions";

@Injectable()
export class CoursesEffects {
    public loadCourses$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseActions.loadCourses),
            switchMap(
                () => combineLatest(this.storeFacadeService.getQuery(), this.storeFacadeService.getCoursesAmount())
            ),
            switchMap(value => {
                const [query, amount]: [string, number] = value;
                return this.courseService.fetchData(query, amount);
            }),
            switchMap((courses: Array<ICourse>) => of(CourseActions.loadCoursesSuccess({ courses }))),
            catchError(error => of(CourseActions.loadCoursesFail({ errorMessage: error.message })))
        )
    );

    public addCourse$: Observable<any> = createEffect(() => this.actions$.pipe(
        ofType(CourseActions.addCourse),
        switchMap(({ course }) => this.courseService.addCourse(course)),
        switchMap(() => {
                return [CourseActions.loadCourses(), CourseActions.coursesRedirect()];
            }
        ),
        catchError(error => of(CourseActions.loadCoursesFail({ errorMessage: error.message })))
    ));

    public coursesRedirect$: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.coursesRedirect),
            tap(() => {
                this.router.navigate(["/"]);
            })
        ),
        { dispatch: false }
    );

    public deleteCourse$: Observable<any> = createEffect(() => this.actions$.pipe(
        ofType(CourseActions.deleteCourse),
        switchMap(({ courseIdToDelete }) => this.courseService.removeCourse(courseIdToDelete)),
        switchMap(() => of(CourseActions.loadCourses())),
        catchError(error => of(CourseActions.loadCoursesFail({ errorMessage: error.message })))
    ));

    constructor(
        private actions$: Actions,
        private courseService: CourseService,
        private router: Router,
        private storeFacadeService: StoreFacadeService
    ) {
    }
}
