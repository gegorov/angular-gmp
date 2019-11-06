import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list.component";
import { FormsModule } from "@angular/forms";
import { BorderDecoratorDirective } from "./course/directives/border-decorator.directive";

@NgModule({
    declarations: [SearchComponent, CourseComponent, CoursesListComponent, BorderDecoratorDirective],
    imports: [CommonModule, FormsModule],
    exports: [CoursesListComponent]
})
export class CoursesListModule {}
