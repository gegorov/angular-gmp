import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/index";
import { SharedModule } from "./shared/index";
import { CoursesListModule } from "./courses-list/index";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        CoursesListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
