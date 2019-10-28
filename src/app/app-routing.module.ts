import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./shared/index";


const routes: Routes = [
    { path: "", component: MainLayoutComponent },
    { path: "**", redirectTo: "/" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
