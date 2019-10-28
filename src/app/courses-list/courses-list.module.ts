import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [SearchComponent, CourseComponent, CoursesListComponent],
    imports: [CommonModule, FormsModule],
    exports: [CoursesListComponent]
})
export class CoursesListModule { }
