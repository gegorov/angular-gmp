import { Directive, HostListener } from "@angular/core";
import { Location } from "@angular/common";

@Directive({
    selector: "[appGoBack]"
})
export class GoBackDirective {

    private location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    @HostListener("click")
    public onClick() {
        this.location.back();
    }
}
