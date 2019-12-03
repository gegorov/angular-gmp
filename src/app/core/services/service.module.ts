import { NgModule } from "@angular/core";
import { AuthService } from "./auth-service/auth.service";
import { BreadcrumbsService } from "./breadcrumbs/breadcrumbs.service";
import { CourseService } from "./course-service/course.service";

@NgModule({
    declarations: [],
    imports: [],
    providers: [AuthService, BreadcrumbsService, CourseService]
})

export class ServiceModule {}
