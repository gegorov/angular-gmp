import { Directive, ElementRef, OnInit } from "@angular/core";
import { CourseComponent } from "../course.component";
import { generateBorderColor } from "../../../core/helpers/index";

@Directive({
    selector: "[appBorderDecorator]"
})
export class BorderDecoratorDirective implements OnInit {
    private readonly element: ElementRef;

    private courseComponent: CourseComponent;

    constructor(element: ElementRef, courseComponent: CourseComponent) {
        this.element = element;
        this.courseComponent = courseComponent;
    }

    ngOnInit(): void {
        this.element.nativeElement.style.border = generateBorderColor(this.courseComponent.course.creationDate);
    }
}
