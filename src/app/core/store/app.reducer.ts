import { ActionReducerMap } from "@ngrx/store";
import * as fromAuth from "./reducers/auth.reducers";
import * as fromCourses from "./reducers/courses.reducers";



export interface AppState {
    [fromCourses.coursesKey]: fromCourses.CoursesState;
    [fromAuth.authKey]: fromAuth.AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
    [fromCourses.coursesKey]: fromCourses.reducer,
    [fromAuth.authKey]: fromAuth.reducer,
};



