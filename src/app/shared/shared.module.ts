import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainLayoutModule } from "./main-layout/index";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";

@NgModule({
    declarations: [BreadcrumbsComponent],
    imports: [CommonModule, MainLayoutModule],
    exports: [BreadcrumbsComponent, MainLayoutModule]
})
export class SharedModule {}
