import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "duration"
})
export class DurationPipe implements PipeTransform {

    transform(min: number): string {
        const parsedMin: number = parseInt(min.toString(), 10);
        const MINUTES_IN_HOUR: number = 60;

        if (min < MINUTES_IN_HOUR) {
            return `${parsedMin} min`;
        } else {
            const hours: number  = Math.floor(parsedMin / MINUTES_IN_HOUR);
            return `${hours} h  ${Math.round( ((parsedMin / MINUTES_IN_HOUR) - hours) * 60)} min`;
        }
    }

}
