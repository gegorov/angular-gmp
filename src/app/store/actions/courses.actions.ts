import { Action } from "@ngrx/store";
import { ICourse } from "../../core/models/course.interface";

export const LOAD_COURSES: string = "LOAD COURSES";
export const LOAD_COURSES_SUCCESS: string = "LOAD COURSES SUCCESS";
export const LOAD_COURSES_FAIL: string = "LOAD COURSES FAIL";
export const ADD_COURSE: string = "ADD COURSE";
export const EDIT_COURSE: string = "EDIT COURSE";
export const DELETE_COURSE: string = "DELETE COURSE";


export type CoursesActionPayload<T> =
    T extends string ? "string" :
    T extends Array<ICourse> ? "Array<ICourse>" : null;

export class LoadCourses implements Action {
    readonly type = LOAD_COURSES;

    constructor(public payload: null) {
    }
}

export class LoadCoursesSuccess implements Action {
    readonly type = LOAD_COURSES_SUCCESS;

    constructor(public payload: CoursesActionPayload<Array<ICourse>>) {
    }
}

export class LoadCoursesFail implements Action {
    readonly type = LOAD_COURSES_FAIL;

    constructor(public payload: CoursesActionPayload<string>) {
    }
}

export class AddCourse implements Action {
    readonly type = ADD_COURSE;

    constructor(public payload: CoursesActionPayload<null>) {
    }
}

export class EditCourse implements Action {
    readonly type = EDIT_COURSE;

    constructor(public payload: null) {
    }
}

export class DeleteCourse implements Action {
    readonly type = DELETE_COURSE;

    constructor(public payload: null) {
    }
}

export type CoursesActions = LoadCoursesFail
    | LoadCoursesSuccess
    | LoadCourses
    | AddCourse
    | EditCourse
    | DeleteCourse;
