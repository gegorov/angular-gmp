/* tslint:disable:typedef */
import { Action, createReducer, on } from "@ngrx/store";

import { ICourse } from "../../models/index";
import * as CoursesActions from "../actions/courses.actions";

export interface CoursesState {
    courses: Array<ICourse>;
    errorMessage: string;
    query: string;
    coursesAmount: number;
}

const initialCoursesAmount: number = 5;

const initialState: CoursesState = {
    courses: null,
    errorMessage: null,
    query: "",
    coursesAmount: initialCoursesAmount
};

export const coursesKey = "courses";

const coursesReducer = createReducer(
    initialState,
    on(CoursesActions.setQuery, (state, { query }) => ({ ...state, query })),
    on(CoursesActions.loadMore, (state, { coursesToLoad }) => ({
        ...state,
        coursesAmount: state.coursesAmount + coursesToLoad
    })),
    on(CoursesActions.loadCoursesSuccess, (state, { courses }) => ({ ...state, courses, errorMessage: null })),
    on(CoursesActions.loadCoursesFail, (state, { errorMessage }) => ({ ...state, errorMessage }))
);

export function reducer(state: CoursesState | undefined, action: Action) {
    return coursesReducer(state, action);
}
