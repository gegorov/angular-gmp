import { Component } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent {

    public searchValue: string;

    public onSubmit() {
        console.log("Search input value: ", this.searchValue);
        this.searchValue = "";

    }
}
