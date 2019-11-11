import { calculateMillisecondsFromDays, generateBorderColor } from "./helper-functions";

describe("calculateMillisecondsFromDays", () => {
    it("should return 0 if 0 days passed", () => {
        const zero: number = 0;
        expect(calculateMillisecondsFromDays(zero)).toEqual(0);
    });

    it("should return 86 400 000 if 1 days passed", () => {
        const one: number = 1;
        const millisecondsInOneDay: number = 86400000;
        expect(calculateMillisecondsFromDays(one)).toEqual(millisecondsInOneDay);
    });
});


describe("generateBorderColor", () => {
    const baseDate: Date = new Date();

    it("should return string \"solid 1px green\" if course is new (< 14 days from course creation)", () => {
        expect(generateBorderColor( baseDate)).toEqual("solid 1px green");
    });

    it("should return string \"solid 1px blue\" if course is not published ", () => {
        const days: number = 2;
        expect(generateBorderColor(new Date(baseDate.getTime() + calculateMillisecondsFromDays(days)))).toEqual("solid 1px blue");
    });

    it("should return string \"none\" if course older than 14", () => {
        const days: number = 14;
        expect(generateBorderColor(new Date(baseDate.getTime() - calculateMillisecondsFromDays(days)))).toEqual("none");
    });

});
