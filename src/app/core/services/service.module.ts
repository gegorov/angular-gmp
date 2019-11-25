import { NgModule } from "@angular/core";
import { CourseService } from "./course-service/course.service";
import { AuthService } from "./auth-service/auth.service";

@NgModule({
    declarations: [],
    imports: [],
    providers: [CourseService, AuthService, ],
})

export class ServiceModule { }
