import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainLayoutModule } from "./main-layout/index";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { DurationPipe, FilterPipe, OrderByPipe } from "./pipes/index";
import { MaterialModule } from "../shared/material/index";
import { PopupComponent } from "./popup/popup.component";


@NgModule({
    declarations: [BreadcrumbsComponent, DurationPipe, FilterPipe, OrderByPipe, PopupComponent],
    imports: [CommonModule, MainLayoutModule, MaterialModule],
    exports: [BreadcrumbsComponent, MainLayoutModule, DurationPipe, FilterPipe, OrderByPipe, CommonModule, MaterialModule],
    entryComponents: [PopupComponent]
})
export class SharedModule {}
