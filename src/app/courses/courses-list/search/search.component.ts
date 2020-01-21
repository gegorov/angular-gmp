import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
    /**
     * Emit search query string on user submit
     */
    @Output() public notify: EventEmitter<string> = new EventEmitter();

    /**
     * function that consoles input value on submit
     */
    public onKeyup(event) {
        this.notify.emit(event.target.value);
    }
}
