import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddCoursePageComponent } from "./add-course-page/add-course-page.component";
import { CoursesListComponent } from "./courses-list/index";
import { LoginPageComponent } from "./login-page/index";
import { AuthGuard } from "./core/index";


const routes: Routes = [
    {
        path: "",
        component: CoursesListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "login",
        component: LoginPageComponent,
    },
    {
        path: "add",
        component: AddCoursePageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "course/:id/edit",
        component: AddCoursePageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "**",
        redirectTo: "/",
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
