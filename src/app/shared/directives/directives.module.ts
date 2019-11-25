import { NgModule } from "@angular/core";

import { BorderDecoratorDirective } from "./border-decorator/border-decorator.directive";
import { IsAuthorizedDirective } from "./is-authorized/is-authorized.directive";

@NgModule({
    imports: [],
    declarations: [BorderDecoratorDirective, IsAuthorizedDirective],
    exports: [BorderDecoratorDirective, IsAuthorizedDirective]
})
export class DirectivesModule {}
