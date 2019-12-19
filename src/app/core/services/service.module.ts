import { NgModule } from "@angular/core";
import { AuthService } from "./auth-service/auth.service";
import { BreadcrumbsService } from "./breadcrumbs/breadcrumbs.service";
import { CourseService } from "./course-service/course.service";
import { LoadingService } from "./loading-service/loading.service";

@NgModule({
    declarations: [],
    imports: [],
    providers: [AuthService, BreadcrumbsService, CourseService, LoadingService]
})

export class ServiceModule {}
