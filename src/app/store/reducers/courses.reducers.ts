/* tslint:disable:typedef */
import { Action, createReducer, on } from "@ngrx/store";

import { ICourse } from "../../core/index";
import * as CoursesActions from "../actions/courses.actions";


export interface CoursesState {
    courses: Array<ICourse>;
    errorMessage: string;
}

const initialState: CoursesState = {
    courses: null,
    errorMessage: null
};

export const coursesKey = "courses";

const coursesReducer = createReducer(
    initialState,
    on(CoursesActions.loadCoursesSuccess, (state, { courses }) => ({ ...state, courses, errorMessage: null })),
    on(CoursesActions.loadCoursesFail, (state, { errorMessage }) => ({ ...state, errorMessage })),
);

export function reducer(state: CoursesState | undefined, action: Action) {
    return coursesReducer(state, action);
}

