import { Directive, HostBinding, Input, OnInit } from "@angular/core";

import { generateBorderColor, BORDER_BLUE, BORDER_GREEN, BORDER_NONE } from "../../../core/index";

@Directive({
    selector: "[appBorderDecorator]"
})
export class BorderDecoratorDirective implements OnInit {

    /**
     * Variable ot store class that should be turned on by directive
     */
    @HostBinding(`class.border-green`) public borderGreen: boolean;

    /**
     * Variable ot store class that should be turned on by directive
     */
    @HostBinding(`class.border-blue`) public borderBlue: boolean;

    /**
     * Variable ot store class that should be turned on by directive
     */
    @HostBinding(`class.border-none`) public borderNone: boolean;

    /**
     * input field for directive that receives Date
     */
    @Input() public dateToColor: string;

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
