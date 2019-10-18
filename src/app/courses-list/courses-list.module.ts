import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { SingleCourseComponent } from "./single-course/single-course.component";
import { CoursesListComponent } from "./courses-list.component";



@NgModule({
    declarations: [SearchComponent, SingleCourseComponent, CoursesListComponent],
    imports: [
        CommonModule
    ],
    exports: [CoursesListComponent]
})
export class CoursesListModule { }
