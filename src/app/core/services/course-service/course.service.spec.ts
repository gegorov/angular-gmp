import { Observable } from "rxjs";
import { async, TestBed } from "@angular/core/testing";

import { CourseService } from "./course.service";
import { ICourse } from "../../models/index";

describe("CourseService", () => {
    const mockedCourses: Array<ICourse> = [];
    let courseService: CourseService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [CourseService]
        }).compileComponents();
        courseService = TestBed.get(CourseService);
    }));

    it("should be created", () => {
        expect(courseService).toBeTruthy();
    });

    it("should return an observable", done => {
        const courses$: Observable<Array<ICourse>> = courseService.fetchData("", 5);
        courses$.subscribe((courses: Array<ICourse>) => {
            expect(courses).toEqual(mockedCourses);
            done();
        });
    });
});
