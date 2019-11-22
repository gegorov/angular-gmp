import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoComponent } from "./logo/logo.component";
import { MainLayoutComponent } from "./main-layout.component";
import { DirectivesModule } from "../directives/index";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        LogoComponent,
        MainLayoutComponent
    ],
    imports: [CommonModule, DirectivesModule],
    exports: [MainLayoutComponent]
})
export class MainLayoutModule {}
