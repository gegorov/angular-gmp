import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "../../../core/index";

@Pipe({
    name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
    public transform(courses: Array<ICourse>): Array<ICourse> {
        return courses
                .slice()
                .sort((courseA: ICourse, courseB: ICourse) => courseB.creationDate.getTime() - courseA.creationDate.getTime());
    }
}
