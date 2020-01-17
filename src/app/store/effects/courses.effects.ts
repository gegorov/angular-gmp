import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Observable, of } from "rxjs";

import { CourseService } from "../../core/services/course-service/course.service";
import * as CourseActions from "../actions/courses.actions";

@Injectable()
export class CoursesEffects {



    constructor(
        private actions$: Actions,
        private courseService: CourseService
    ) {
    }


    public loadCourses$L: Observable<any> = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.loadCourses),

        )
    );


}


