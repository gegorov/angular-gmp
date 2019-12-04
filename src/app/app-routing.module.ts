import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddCoursePageComponent, CoursesComponent, CoursesListComponent, EditCoursePageComponent } from "./courses/index";
import { LoginPageComponent } from "./login-page/index";
import { AuthGuard } from "./core/index";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes: Routes = [
    {
        path: "courses",
        component: CoursesComponent,
        canActivate: [AuthGuard],
        data: {
            breadcrumb: "Courses"
        },
        children: [
            {
                path: "",
                component: CoursesListComponent,
                data: {
                    breadcrumb: "All Courses"
                }
            },
            {
                path: "new",
                component: AddCoursePageComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: "Add Course"
                }
            },
            {
                path: ":id",
                component: EditCoursePageComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: "Edit Course"
                }
            },
            {
                path: "**",
                redirectTo: "/not-found"
            }
        ]
    },
    {
        path: "login",
        component: LoginPageComponent
    },
    {
        path: "",
        redirectTo: "/courses",
        pathMatch: "full"
    },
    {
        path: "not-found",
        component: NotFoundComponent
    },
    {
        path: "**",
        redirectTo: "/not-found"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
