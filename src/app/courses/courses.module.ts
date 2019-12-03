import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddCoursePageComponent } from "./add-course-page/index";
import { CoursesComponent } from "./courses.component";
import { SharedModule } from "../shared/shared.module";
import { CoursesListModule } from "./courses-list/index";
import { EditCoursePageComponent } from "./edit-course-page/index";

@NgModule({
    declarations: [AddCoursePageComponent, CoursesComponent, EditCoursePageComponent],
    imports: [SharedModule, RouterModule, CoursesListModule],
    exports: [CoursesComponent],
    providers: []
})
export class CoursesModule {}
