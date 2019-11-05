import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { COURSES } from "../../helpers/mock-courses";
import { ICourse } from "../../models";

@Injectable()
export class CourseService {
    private courses: Array<ICourse> = COURSES;

    /**
     * method that returns Observable with courses data
     */
    public getCourses(): Observable<Array<ICourse>> {
        return of(this.courses);
    }
}
