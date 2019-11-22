import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainLayoutModule } from "./main-layout/index";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { DurationPipe, FilterPipe, OrderByPipe } from "./pipes/index";
import { MaterialModule } from "../shared/material/index";
import { PopupComponent } from "./popup/popup.component";
import { DirectivesModule } from "./directives/index";


@NgModule({
    declarations: [BreadcrumbsComponent, DurationPipe, FilterPipe, OrderByPipe, PopupComponent],
    imports: [CommonModule, DirectivesModule, MaterialModule, MainLayoutModule],
    exports: [
        BreadcrumbsComponent,
        CommonModule,
        DirectivesModule,
        DurationPipe,
        FilterPipe,
        MainLayoutModule,
        MaterialModule,
        OrderByPipe,
    ],
    entryComponents: [PopupComponent]
})
export class SharedModule {}
