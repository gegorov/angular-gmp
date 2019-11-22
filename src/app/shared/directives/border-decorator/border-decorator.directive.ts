import { Directive, ElementRef, Input, OnInit } from "@angular/core";
// import { CourseComponent } from "../course.component";
import { generateBorderColor } from "../../../core/helpers/index";

@Directive({
    selector: "[appBorderDecorator]"
})
export class BorderDecoratorDirective implements OnInit {
    private readonly element: ElementRef;

    /**
     * input field for directive that receives Date
     */
    @Input() public dateToColor: Date;

    constructor(element: ElementRef) {
        this.element = element;
    }

    public ngOnInit(): void {
        this.element.nativeElement.style.border = generateBorderColor(this.dateToColor);
    }
}
