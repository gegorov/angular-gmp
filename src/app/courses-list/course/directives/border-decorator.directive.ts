import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: "[appBorderDecorator]"
})
export class BorderDecoratorDirective {

    @Input() public courseDate: Date;

    private element: ElementRef;


    constructor(element: ElementRef) {
        this.element = element;
        this.element.nativeElement.style.border = "solid 1px blue";
    }
}
