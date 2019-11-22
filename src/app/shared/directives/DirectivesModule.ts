import { NgModule } from "@angular/core";
import { IsAuthorizedDirective } from "./is-authorized/is-authorized.directive";
import { BorderDecoratorDirective } from "./border-decorator/border-decorator.directive";

@NgModule({
    imports: [],
    declarations: [BorderDecoratorDirective, IsAuthorizedDirective],
    exports: [BorderDecoratorDirective, IsAuthorizedDirective]
})
export class DirectivesModule {}
