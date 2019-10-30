import { Component } from "@angular/core";

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
     * function that consoles input value on submit
     */
    public onSubmit() {
        console.log("Search input value: ", this.searchValue);
        this.searchValue = "";

    }
}
