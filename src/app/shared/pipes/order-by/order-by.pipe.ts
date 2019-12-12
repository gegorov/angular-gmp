import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "../../../core/index";

@Pipe({
    name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
    // TODO: check why it is not sorting after adding new course
    public transform(courses: Array<ICourse>): Array<ICourse> {
        return courses
            .slice()
            .sort((
                courseA: ICourse,
                courseB: ICourse,
            ) => new Date(courseB.date).getTime() - new Date(courseA.date).getTime());
    }
}
