import { FilterPipe } from "./filter.pipe";

import { COURSES } from "../../../core/helpers/mock-courses";

describe("FilterPipe", () => {
    let pipe: FilterPipe;
    beforeEach(() => {
        pipe = new FilterPipe();
    });
    it("create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    it("should return full all courses if empty argument passed", () => {
        expect(pipe.transform(COURSES, "")).toEqual(COURSES);
    });

    it("should return empty array if no matches found", () => {
        const searchString: string = "la-la-land";
        expect(pipe.transform(COURSES, searchString)).toEqual([]);
    });

    it("should return correctly filtered array if matches found", () => {
        const searchString: string = "n";
        expect(pipe.transform(COURSES, searchString)).toEqual(COURSES.filter(course => course.title.toLowerCase().includes(searchString)));
    });
});
