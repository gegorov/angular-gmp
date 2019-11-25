import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
        path: "**",
        redirectTo: "/",
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
