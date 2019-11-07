import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "duration"
})
export class DurationPipe implements PipeTransform {

    transform(min: number): string {
        const MINUTES_IN_HOUR: number = 60;

        if (min < 60) {
            return `${min}min`;
        } else {
            const hours: number  = Math.floor(min / MINUTES_IN_HOUR);
            return `${hours}h ${Math.round( ((min / MINUTES_IN_HOUR) - hours) * 60)}min`;
        }
    }

}
