import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { MainLayoutModule } from "./main-layout/index";
import { DurationPipe, FilterPipe, OrderByPipe } from "./pipes/index";
import { MaterialModule } from "../shared/material/index";
import { PopupComponent } from "./popup/popup.component";
import { DirectivesModule } from "./directives/index";
import { CourseFormComponent } from "./course-form/course-form.component";


@NgModule({
    declarations: [BreadcrumbsComponent, DurationPipe, FilterPipe, OrderByPipe, PopupComponent, CourseFormComponent],
    imports: [CommonModule, DirectivesModule, FormsModule, MaterialModule, MainLayoutModule, RouterModule],
    exports: [
        BreadcrumbsComponent,
        CommonModule,
        CourseFormComponent,
        DirectivesModule,
        DurationPipe,
        FilterPipe,
        MainLayoutModule,
        MaterialModule,
        OrderByPipe,
        FormsModule,
    ],
    entryComponents: [PopupComponent]
})
export class SharedModule {}
