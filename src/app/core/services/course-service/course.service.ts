import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

import { COURSES } from "../../helpers/mock-courses";
import { ICourse } from "../../models";

@Injectable()
export class CourseService {
    private courses: Array<ICourse> = COURSES;

    private coursesSubject: BehaviorSubject<Array<ICourse>> = new BehaviorSubject<Array<ICourse>>(this.courses);

    /**
     * method that returns Observable with courses data
     */
    public getCoursesList(): Observable<Array<ICourse>> {
        return this.coursesSubject.asObservable();
    }

    /**
     * method that adds course
     */
    public addCourse(course: ICourse): void {
        this.courses = [...this.courses, course];
        this.coursesSubject.next(this.courses);
    }

    /**
     * method that returns specific course by id
     */
    public getCourse(id: number): Observable<ICourse> {
        const course: ICourse = this.courses.find((c: ICourse) => c.id === id);

        return of(course);
    }

    /**
     * method that updates course
     */
    public updateCourses(course: ICourse): void {
        this.removeCourse(course.id);
        this.addCourse(course);
    }

    /**
     * method that removes course
     */
    public removeCourse(id: number): void {
        this.courses = this.courses.filter((c) => c.id !== id);
        this.coursesSubject.next(this.courses);
    }
}
