import { CourseService } from "./course.service";
import { COURSES } from "../../helpers/mock-courses";
import { ICourse } from "../../models/course.interface";

describe("CourseService", () => {
    const courseService = new CourseService();
    const mockedCourses: Array<ICourse> = COURSES;

    it("should return an observable", (done) => {
        const courses$ = courseService.getCourses();
        courses$.pipe().subscribe(
            (courses: Array<ICourse>) => {
                expect(courses).toEqual(mockedCourses);
                done();
            });
    });

});
