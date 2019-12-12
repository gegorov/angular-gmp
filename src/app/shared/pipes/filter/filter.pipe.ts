import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "../../../core/index";

@Pipe({
    name: "filter",
})
export class FilterPipe implements PipeTransform {

    transform(courses: Array<ICourse>, searchString: string): Array<ICourse> {
        return searchString
            ? courses.filter(
                course => course.name.toLowerCase().includes(searchString.toLowerCase())
            )
            : courses;
    }
}
