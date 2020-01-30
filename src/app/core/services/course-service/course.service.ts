import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { API_URL } from "../../constants/index";
import { ICourse } from "../../models/index";

@Injectable()
export class CourseService {
    private http: HttpClient;

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
        return this.http.patch<ICourse>(`${API_URL}/courses/${course.id}`, course);
    }

    /**
     * method that removes course
     */
    public removeCourse(id: number): Observable<any> {
        return this.http.delete(`${API_URL}/courses/${id}`);
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
