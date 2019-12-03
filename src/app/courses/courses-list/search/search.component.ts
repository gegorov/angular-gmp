import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
    /**
     * variable to store search value form search input
     */
    public searchValue: string;

    /**
     * Emit search query string on user submit
     */
    @Output() public notify: EventEmitter<string> = new EventEmitter();

    /**
     * function that consoles input value on submit
     */
    public onSubmit() {
        this.notify.emit(this.searchValue);
        this.searchValue = "";
    }
}
