import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainLayoutModule } from "./main-layout/index";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { DurationPipe } from "./pipes/index";

@NgModule({
    declarations: [BreadcrumbsComponent, DurationPipe],
    imports: [CommonModule, MainLayoutModule],
    exports: [BreadcrumbsComponent, MainLayoutModule, DurationPipe]
})
export class SharedModule {}
