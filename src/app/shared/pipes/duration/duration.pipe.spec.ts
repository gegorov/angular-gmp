import { DurationPipe } from "./duration.pipe";

describe("DurationPipe", () => {

    let pipe: DurationPipe;
    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it("create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    it("should return string with only minutes if duration is less than 60 min ", () => {
        const duration: number = 25;
        const expectedResult: string = `${duration}min`;
        expect(pipe.transform(duration)).toBe(expectedResult);
    });

    it("should return string with hours and  minutes if duration is more than 60 min ", () => {
        const duration: number = 125;
        const expectedResult: string = `2h 5min`;
        expect(pipe.transform(duration)).toBe(expectedResult);
    });
});
