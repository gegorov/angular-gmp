import { OrderByPipe } from "./order-by.pipe";

import { COURSES } from "../../core/helpers/mock-courses";
import { ICourse } from "../../core/index";

describe("OrderByPipe", () => {
    let pipe: OrderByPipe;

    beforeEach(() => {
        pipe = new OrderByPipe();
    });

    it("create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    it("should sort array in descending order by creationDate", () => {
        const sorted: Array<ICourse> = COURSES.sort(
            (courseA: ICourse, courseB: ICourse) => courseB.creationDate.getTime() - courseA.creationDate.getTime()
        );
        expect(pipe.transform(COURSES)).toEqual(sorted);
    });
});
