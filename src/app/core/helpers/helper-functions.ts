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
export function generateBorderColor(courseDateString: string): string {
    const currentDate: number = Date.now();
    const courseDateNumber: number = new Date(courseDateString).getTime();

    const daysThreshold: number = 14;

    if (courseDateNumber < currentDate && courseDateNumber >= currentDate - calculateMillisecondsFromDays(daysThreshold)) {
        return BORDER_GREEN;
    } else if (courseDateNumber > currentDate) {
        return BORDER_BLUE;
    } else {
        return BORDER_NONE;
    }
}
