import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { filter, switchMap, tap, scan, startWith } from "rxjs/operators";
import { API_URL } from "../../constants/index";


import { ICourse } from "../../models/index";

@Injectable()
export class CourseService {
    private courses: Array<ICourse> = [];
    private coursesPerPage = 5;
    private http: HttpClient;
    private coursesSubject: BehaviorSubject<Array<ICourse>> = new BehaviorSubject<Array<ICourse>>([]);

    /**
     *  subject that is used to implemnt pagination and load more functionality
     */
    public page$: BehaviorSubject<number>;

    /**
     * subject to handle search query
     */
    public query$: BehaviorSubject<string> = new BehaviorSubject("");

    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * method that returns Observable with courses data
     */
    public getCourses(): Observable<Array<ICourse>> {
        return this.query$.pipe(
            switchMap((query: string) => {
                    this.page$ = new BehaviorSubject(this.coursesPerPage);
                    console.log("[Query]: ", query);
                    return this.page$.pipe(
                        switchMap((count: number) => this.fetchData(query, count))
                    );
                }
            )
        );
    }


    /**
     * method that adds course
     */
    public addCourse(course: ICourse): Observable<ICourse> {
        return this.http.post<ICourse>(`${API_URL}/courses`, course).pipe(
            tap((data) => {
                console.log("[course service, add course]:", data);
            })
        );
    }

    /**
     * method that returns specific course by id
     */
    public getCourse(id: number): Observable<ICourse> {
        return this.http.get<ICourse>(`${API_URL}/courses/${id}`);
    }

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
                    console.log("deleteing: ", id);
                    this.query$.next("");
                }
            ));
    }

    private fetchData(query: string, count: number): Observable<Array<ICourse>> {
        console.log("[query in fetch]", query);
        return this.http.get<Array<ICourse>>(`${API_URL}/courses`, {
            params: new HttpParams()
                .append("textFragment", query)
                .append("count", `${count}`)
                .append("start", "0")
                .append("sort", "date")
        }).pipe(
            tap(() => {
                console.log("[Inside fetch]");
                console.log("[Count]: ", count);
            })
        );
    }
}
