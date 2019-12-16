import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoComponent } from "./logo/logo.component";
import { MainLayoutComponent } from "./main-layout.component";
import { DirectivesModule } from "../directives/index";
import { SpinnerComponent } from "./spinner/index";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        LogoComponent,
        MainLayoutComponent,
        SpinnerComponent
    ],
    imports: [CommonModule, DirectivesModule, RouterModule],
    exports: [MainLayoutComponent]
})
export class MainLayoutModule {}
