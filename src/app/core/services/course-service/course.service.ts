import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { API_URL } from "../../constants/index";
import { ICourse } from "../../models/index";

@Injectable()
export class CourseService {
    private coursesPerPage = 5;
    private http: HttpClient;
    private page$: BehaviorSubject<number>;
    private query$: BehaviorSubject<string> = new BehaviorSubject("");

    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * method that adds course
     */
    public addCourse(course: ICourse): Observable<ICourse> {
        return this.http.post<ICourse>(`${API_URL}/courses`, course);
    }

    /**
     * method that returns Observable with courses data
     */
    public getCourses(): Observable<Array<ICourse>> {
        return this.query$.pipe(
            switchMap((query: string) => {
                this.page$ = new BehaviorSubject(this.coursesPerPage);
                return this.page$.pipe(switchMap((count: number) => this.fetchData(query, count)));
            })
        );
    }

    /**
     * function that triggers next on page$ subject.
     */
    public loadMore(increment: number): void {
        const currentValue: number = this.page$.value;
        this.page$.next(increment + currentValue);
    }

    /**
     * method that returns specific course by id
     */
    public getCourse(id: number): Observable<ICourse> {
        return this.http.get<ICourse>(`${API_URL}/courses/${id}`);
    }

    // /**
    //  * function that triggers next on query$ subject
    //  */
    // public nextQuery(query: string): void {
    //     this.query$.next(query);
    // }

    /**
     * method that updates course
     * TODO: looks like PATCH is not working on backend
     */
    public updateCourses(course: ICourse): Observable<ICourse> {
        return this.http.patch<ICourse>(`${API_URL}/courses`, course);
    }

    /**
     * method that removes course
     */
    public removeCourse(id: number): Observable<any> {
        return this.http.delete(`${API_URL}/courses/${id}`).pipe(
            tap(() => {
                this.query$.next("");
            })
        );
    }

    public fetchData(query: string, count: number): Observable<Array<ICourse>> {
        return this.http.get<Array<ICourse>>(`${API_URL}/courses`, {
            params: new HttpParams()
                .append("textFragment", query)
                .append("count", `${count}`)
                .append("start", "0")
                .append("sort", "date")
        });
    }
}
