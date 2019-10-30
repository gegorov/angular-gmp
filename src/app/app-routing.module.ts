import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoursesListComponent } from "./courses-list/index";


const routes: Routes = [
    {
        path: "",
        component: CoursesListComponent,
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
