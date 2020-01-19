/* tslint:disable:typedef */
import { createAction, props } from "@ngrx/store";
import { ICourse } from "../../core/index";

const LOAD_COURSES: string = "[COURSES] LOAD COURSES";
const LOAD_COURSES_SUCCESS: string = "[COURSES] LOAD COURSES SUCCESS";
const LOAD_COURSES_FAIL: string = "[COURSES] LOAD COURSES FAIL";
const SET_QUERY: string = "[COURSES] SET QUERY";
const LOAD_MORE: string = "[COURSES] LOAD MORE";
const ADD_COURSE: string = "[COURSES] ADD COURSE";
const EDIT_COURSE: string = "[COURSES] EDIT COURSE";
const DELETE_COURSE: string = "[COURSES] DELETE COURSE";

export const loadCourses = createAction(LOAD_COURSES);

export const loadCoursesSuccess = createAction(LOAD_COURSES_SUCCESS, props<{ courses: Array<ICourse> }>());

export const loadCoursesFail = createAction(LOAD_COURSES_FAIL, props<{ errorMessage: string }>());

export const setQuery = createAction(SET_QUERY, props<{ query: string }>());

export const loadMore = createAction(LOAD_MORE, props<{ coursesToLoad: number }>());

export const addCourse = createAction(ADD_COURSE);

export const editCourse = createAction(EDIT_COURSE);

export const deleteCourse = createAction(DELETE_COURSE);
