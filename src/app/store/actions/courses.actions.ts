/* tslint:disable:typedef */
import { createAction, props } from "@ngrx/store";
import { ICourse } from "../../core/index";

export const LOAD_COURSES: string = "LOAD COURSES";
export const LOAD_COURSES_SUCCESS: string = "LOAD COURSES SUCCESS";
export const LOAD_COURSES_FAIL: string = "LOAD COURSES FAIL";
export const ADD_COURSE: string = "ADD COURSE";
export const EDIT_COURSE: string = "EDIT COURSE";
export const DELETE_COURSE: string = "DELETE COURSE";

export const loadCourses = createAction(
    LOAD_COURSES
);

export const loadCoursesSuccess = createAction(
    LOAD_COURSES_SUCCESS,
    props<{ courses: Array<ICourse> }>()
);

export const loadCoursesFail = createAction(
    LOAD_COURSES_FAIL,
    props<{ errorMessage: string }>()
);

export const addCourse = createAction(
    ADD_COURSE
);

export const editCourse = createAction(
    EDIT_COURSE
);

export const deleteCourse = createAction(
  DELETE_COURSE
);
