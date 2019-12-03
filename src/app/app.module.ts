import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/index";
import { SharedModule } from "./shared/index";

import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page/login-page.component";

import { NotFoundComponent } from "./not-found/not-found.component";
import { CoursesModule } from "./courses/index";

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        CoursesModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
