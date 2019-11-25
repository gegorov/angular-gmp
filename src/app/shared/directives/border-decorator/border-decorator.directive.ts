import { Directive, HostBinding, Input, OnInit } from "@angular/core";

import { generateBorderColor, BORDER_BLUE, BORDER_GREEN, BORDER_NONE } from "../../../core/index";

@Directive({
    selector: "[appBorderDecorator]"
})
export class BorderDecoratorDirective implements OnInit {

    @HostBinding(`class.border-green`) private borderGreen: boolean;
    @HostBinding(`class.border-blue`) private borderBlue: boolean;
    @HostBinding(`class.border-none`) private borderNone: boolean;

    /**
     * input field for directive that receives Date
     */
    @Input() public dateToColor: Date;

    public ngOnInit(): void {
        const borderClass: string = generateBorderColor(this.dateToColor);
        switch (borderClass) {
            case BORDER_GREEN: {
                this.borderBlue = false;
                this.borderGreen = true;
                this.borderNone = false;
                break;
            }

            case BORDER_BLUE: {
                this.borderBlue = true;
                this.borderGreen = false;
                this.borderNone = false;
                break;
            }

            case BORDER_NONE:
            default: {
                this.borderBlue = false;
                this.borderGreen = false;
                this.borderNone = true;
                break;
            }
        }
    }
}
