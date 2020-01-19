import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import * as fromApp from "./store/app.reducer";

import * as fromEffects from "./store/effects/index";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/index";
import { SharedModule } from "./shared/index";

import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page/login-page.component";

import { NotFoundComponent } from "./not-found/not-found.component";
import { CoursesModule } from "./courses/index";

@NgModule({
    declarations: [AppComponent, LoginPageComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        CoursesModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([fromEffects.AuthEffects, fromEffects.CoursesEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
