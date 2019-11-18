import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainLayoutModule } from "./main-layout/index";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { DurationPipe, FilterPipe, OrderByPipe } from "./pipes/index";


@NgModule({
    declarations: [BreadcrumbsComponent, DurationPipe, FilterPipe, OrderByPipe],
    imports: [CommonModule, MainLayoutModule],
    exports: [BreadcrumbsComponent, MainLayoutModule, DurationPipe, FilterPipe, OrderByPipe]
})
export class SharedModule {}
