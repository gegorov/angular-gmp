import { NgModule, Optional, SkipSelf } from "@angular/core";
import { SharedModule } from "../shared/index";

import { ServiceModule } from "./services/index";


@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        ServiceModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                "Core module is already loaded"
            );
        }
    }
}
