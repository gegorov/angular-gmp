/* tslint:disable:typedef */
import { createAction, props } from "@ngrx/store";
import { ICourse } from "../../models/index";

const LOAD_COURSES: string = "[COURSES] LOAD COURSES";
const LOAD_COURSES_SUCCESS: string = "[COURSES] LOAD COURSES SUCCESS";
const LOAD_COURSES_FAIL: string = "[COURSES] LOAD COURSES FAIL";
const SET_QUERY: string = "[COURSES] SET QUERY";
const LOAD_MORE: string = "[COURSES] LOAD MORE";
const ADD_COURSE: string = "[COURSES] ADD COURSE";
const LOAD_SINGLE_COURSE: string = "[COURSES] LOAD SINGLE COURSE";
const LOAD_SINGLE_COURSE_SUCCESS: string = "[COURSES] LOAD SINGLE COURSE SUCCESS";
const LOAD_SINGLE_COURSE_FAIL: string = "[COURSES] LOAD SINGLE COURSE FAIL";

const EDIT_COURSE: string = "[COURSES] EDIT COURSE";
const DELETE_COURSE: string = "[COURSES] DELETE COURSE";
const COURSES_REDIRECT: string = "[COURSES] REDIRECT";
const COURSES_REDIRECT_TO_EDIT_PAGE: string = "[COURSES] REDIRECT TO EDIT PAGE";

export const loadCourses = createAction(LOAD_COURSES);

export const loadCoursesSuccess = createAction(LOAD_COURSES_SUCCESS, props<{ courses: Array<ICourse> }>());

export const loadCoursesFail = createAction(LOAD_COURSES_FAIL, props<{ errorMessage: string }>());

export const setQuery = createAction(SET_QUERY, props<{ query: string }>());

export const loadMore = createAction(LOAD_MORE, props<{ coursesToLoad: number }>());

export const addCourse = createAction(ADD_COURSE, props<{ course: ICourse }>());

export const loadCourse = createAction(LOAD_SINGLE_COURSE, props<{ id: number }>());
export const loadCourseSuccess = createAction(LOAD_SINGLE_COURSE_SUCCESS, props<{ course: ICourse }>());
export const loadCourseFail = createAction(LOAD_SINGLE_COURSE_FAIL, props<{ errorMessage: string }>());

export const editCourse = createAction(EDIT_COURSE);

export const deleteCourse = createAction(DELETE_COURSE, props<{ courseIdToDelete: number }>());

export const coursesRedirect = createAction(COURSES_REDIRECT);
export const coursesRedirectToEditPage = createAction(COURSES_REDIRECT_TO_EDIT_PAGE, props<{courseId: number}>());

