import { DurationPipe } from "./duration.pipe";

describe("DurationPipe", () => {
    it("create an instance", () => {
        const pipe: DurationPipe = new DurationPipe();
        expect(pipe).toBeTruthy();
    });
});
