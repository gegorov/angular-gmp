import { Action, ActionReducer } from "@ngrx/store";
import { ICourse } from "../../core/index";
import { CoursesActions, LOAD_COURSES_SUCCESS, LoadCoursesFail, LoadCoursesSuccess } from "../actions/courses.actions";



export interface CoursesState {
    courses: Array<ICourse>;
    errorMessage: string;
}

const initialState: CoursesState = {
    courses: null,
    errorMessage: null,
};

function reducer(state: CoursesState = initialState, action: CoursesActions): CoursesState {
    switch (action.type) {
        case LOAD_COURSES_SUCCESS:
            const {payload } : LoadCoursesSuccess = action;

            return {
                ...state,
                courses: [...action.payload],
            };
        case CoursesActions.LOAD_COURSES_FAIL:
            return {
                ...state,
                errorMessage: action.payload,
            };
        default:
            return state;
    }


}

export const coursesReducer: ActionReducer<CoursesState, Action> = (state, action) => {
    return reducer(state, action as CoursesActions.CoursesActions);
};
