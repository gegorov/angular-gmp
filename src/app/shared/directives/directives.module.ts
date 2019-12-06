import { NgModule } from "@angular/core";

import { BorderDecoratorDirective } from "./border-decorator/border-decorator.directive";
import { GoBackDirective } from "./go-back/go-back.directive";
import { IsAuthorizedDirective } from "./is-authorized/is-authorized.directive";

@NgModule({
    imports: [],
    declarations: [BorderDecoratorDirective, GoBackDirective, IsAuthorizedDirective],
    exports: [BorderDecoratorDirective, GoBackDirective, IsAuthorizedDirective]
})
export class DirectivesModule {}
