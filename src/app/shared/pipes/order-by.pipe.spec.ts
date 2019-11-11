import { OrderByPipe } from "./order-by.pipe";

describe("OrderByPipe", () => {
    it("create an instance", () => {
        const pipe: OrderByPipe = new OrderByPipe();
        expect(pipe).toBeTruthy();
    });
});
