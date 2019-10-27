import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list.component";

@NgModule({
    declarations: [SearchComponent, CourseComponent, CoursesListComponent],
    imports: [CommonModule],
    exports: [CoursesListComponent]
})
export class CoursesListModule {}
