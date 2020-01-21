import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, Provider, SkipSelf } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AuthGuard } from "./guards/index";
import { AuthInterceptor, LoaderInterceptor } from "./interceptors/index";
import { StoreFacadeService } from "./store-facade/index";
import { ServiceModule } from "./services/index";

import { effects } from "./store/effects/index";
import * as fromApp from "./store/app.reducer";


const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
};
const LOADER_INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
};


@NgModule({
    declarations: [],
    imports: [
        ServiceModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([...effects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        })
    ],
    providers: [AuthGuard, INTERCEPTOR_PROVIDER, LOADER_INTERCEPTOR_PROVIDER, StoreFacadeService]
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
