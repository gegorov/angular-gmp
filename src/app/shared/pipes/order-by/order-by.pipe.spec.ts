import { OrderByPipe } from "./order-by.pipe";

import { ICourse } from "../../../core/index";

describe("OrderByPipe", () => {
    let pipe: OrderByPipe;

    beforeEach(() => {
        pipe = new OrderByPipe();
    });

    it("create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    it("should sort array in descending order by creationDate", () => {
        const sorted: Array<ICourse> = [].sort(
            (courseA: ICourse, courseB: ICourse) => new Date(courseB.date).getTime() - new Date(courseA.date).getTime()
        );
        expect(pipe.transform([])).toEqual(sorted);
    });
});
