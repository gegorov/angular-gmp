import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUserLogin, IUser, ICourse } from "../models/index";

import * as fromApp from "../store/app.reducer";
import * as fromAuth from "../store/reducers/auth.reducers";
import * as fromCourses from "../store/reducers/courses.reducers";
import * as AuthActions from "../store/actions/auth.actions";
import * as CoursesActions from "../store/actions/courses.actions";

@Injectable({
    providedIn: "root"
})
export class StoreFacadeService {
    private store: Store<fromApp.AppState>;
    private router: Router;

    constructor(router: Router, store: Store<fromApp.AppState>) {
        this.store = store;
        this.router = router;
    }

    /**
     * function that triggers login
     */
    public login(credentials: IUserLogin) {
        this.store.dispatch(AuthActions.login({ credentials }));
    }

    /**
     * function that triggers logout
     */
    public logout() {
        this.store.dispatch(AuthActions.logout());
    }

    /**
     * function that returns authentication status
     */
    public isAuthenticated(): Observable<boolean> {
        return this.store.pipe(
            select(fromAuth.selectAuthTokenState),
            map(value => !!value)
        );
    }

    /**
     * function that returns token
     */
    public getToken(): Observable<string> {
        return this.store.pipe(select(fromAuth.selectAuthTokenState));
    }

    /**
     * function that returns current user
     */
    public getCurrentUser(): Observable<IUser> {
        return this.store.pipe(select(fromAuth.selectAuthUserState));
    }

    /**
     * function that triggers loginSuccessful action
     */
    public loginSuccessful(token: string): void {
        this.store.dispatch(AuthActions.loginSuccessful({ token }));
    }

    /**
     * function that returns observable with query
     */
    public getQuery(): Observable<string> {
        return this.store.pipe(select(fromCourses.selectCoursesQueryState));
    }

    public setQuery(query: string): void {
        this.store.dispatch(CoursesActions.setQuery({ query }));
    }

    /**
     * function that triggers initial load of courses
     */
    public loadCourses(): void {
        this.store.dispatch(CoursesActions.loadCourses());
    }

    public getCourses(): Observable<Array<ICourse>> {
        return this.store.pipe(select(fromCourses.selectCourses));
    }

    /**
     * function that returns observable with courses amount to load
     */
    public getCoursesAmount(): Observable<number> {
        return this.store.pipe(select(fromCourses.selectCoursesAmountState));
    }

    /**
     * function that triggers loadMore with increment
     */
    public loadMore(increment: number): void {
        this.store.dispatch(CoursesActions.loadMore({ coursesToLoad: increment }));
    }
}
