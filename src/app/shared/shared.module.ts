import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainLayoutModule } from "./main-layout/index";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { DurationPipe, OrderByPipe } from "./pipes/index";


@NgModule({
    declarations: [BreadcrumbsComponent, DurationPipe, OrderByPipe],
    imports: [CommonModule, MainLayoutModule],
    exports: [BreadcrumbsComponent, MainLayoutModule, DurationPipe, OrderByPipe]
})
export class SharedModule {}
