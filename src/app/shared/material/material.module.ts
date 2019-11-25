import { NgModule } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
    declarations: [],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        MatDialogModule,
        MatButtonModule
    ],
    providers: [MatDialog]
})
export class MaterialModule {}
