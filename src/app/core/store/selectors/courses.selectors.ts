/* tslint:disable:typedef */
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesKey, CoursesState } from "../reducers/courses.reducers";

export const selectCoursesState = createFeatureSelector(coursesKey);

export const selectCoursesQueryState = createSelector(
    selectCoursesState,
    (state: CoursesState) => state.query
);

export const selectCoursesAmountState = createSelector(
    selectCoursesState,
    (state: CoursesState) => state.coursesAmount
);

export const selectCourses = createSelector(
    selectCoursesState,
    (state: CoursesState) => state.courses
);

export const selectCourseToEdit = createSelector(
    selectCoursesState,
    (state: CoursesState) => state.courseToEdit
);
