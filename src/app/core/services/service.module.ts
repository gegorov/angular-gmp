import { NgModule } from "@angular/core";
import { AuthService } from "./auth-service/auth.service";
import { BreadcrumbsService } from "./breadcrumbs/breadcrumbs.service";
import { CourseService } from "./course-service/course.service";
import { LoadingService } from "./loading-service/loading.service";
import { StoreFacadeService } from "./store-facade/store-facade.service";

@NgModule({
    declarations: [],
    imports: [],
    providers: [AuthService, BreadcrumbsService, CourseService, LoadingService, StoreFacadeService]
})

export class ServiceModule {}
