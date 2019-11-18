import { NgModule, Optional, SkipSelf } from "@angular/core";
import { AuthGuard } from "./guards/index";


import { ServiceModule } from "./services/index";


@NgModule({
    declarations: [],
    imports: [
        ServiceModule,
    ],
    providers: [AuthGuard]
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
