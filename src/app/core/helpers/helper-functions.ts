import { hoursInDay, secondsInHour, millisecondInSecond, BORDER_BLUE, BORDER_GREEN, BORDER_NONE } from "../constants/index";

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
        return BORDER_GREEN;
    } else if (courseDate.getTime() > currentDate) {
        return BORDER_BLUE;
    } else {
        return BORDER_NONE;
    }
}
