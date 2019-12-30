import { ActionReducerMap } from "@ngrx/store";

import * as fromCourses from "./reducers/courses.reducers";
import * as fromAuth from "./reducers/auth.reducers";


export interface AppState {
    courses: fromCourses.CoursesState;
    auth: fromAuth.AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
    courses: fromCourses.reducer,
    auth: fromAuth.reducer,
};
