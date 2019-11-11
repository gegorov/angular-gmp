import { hoursInDay, secondsInHour, millisecondInSecond } from "../constants/index";

/**
 * Function that calculates how many milliseconds in days.
 */
export function calculateMillisecondsFromDays(days: number): number {
    return days * hoursInDay * secondsInHour * millisecondInSecond;
}

/**
 * function that returns string with css properties for border of course element
 */
export function generateBorderColor(courseDate: Date): string {
    const currentDate: number = Date.now();

    const daysThreshold: number = 14;

    if (courseDate.getTime() < currentDate && courseDate.getTime() >= currentDate - calculateMillisecondsFromDays(daysThreshold)) {
        return "solid 1px green";
    } else if (courseDate.getTime() > currentDate) {
        return "solid 1px blue";
    } else {
        return "none";
    }
}
