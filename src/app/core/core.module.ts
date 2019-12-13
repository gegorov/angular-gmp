import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, Provider, SkipSelf } from "@angular/core";
import { AuthGuard } from "./guards/index";
import { AuthInterceptor } from "./interceptors/index";


import { ServiceModule } from "./services/index";

const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor,
};


@NgModule({
    declarations: [],
    imports: [
        ServiceModule
    ],
    providers: [AuthGuard, INTERCEPTOR_PROVIDER]
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
