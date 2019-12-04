import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list.component";
import { FormsModule } from "@angular/forms";
import { SharedModule, OrderByPipe } from "../../shared/index";

@NgModule({
    declarations: [SearchComponent, CourseComponent, CoursesListComponent],
    imports: [FormsModule, SharedModule, RouterModule],
    exports: [CoursesListComponent],
    providers: [OrderByPipe]
})
export class CoursesListModule {}
