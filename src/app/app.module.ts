import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/index";
import { SharedModule } from "./shared/index";
import { CoursesListModule } from "./courses-list/index";

import { AddCoursePageComponent } from "./add-course-page/add-course-page.component";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';

@NgModule({
    declarations: [
        AddCoursePageComponent,
        AppComponent,
        LoginPageComponent,
        EditCoursePageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        CoursesListModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
