import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./search.component";
import { FormsModule } from "@angular/forms";

describe("SearchComponent", () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [FormsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should console.log if onSubmit method called", () => {
        const searchInput: string = "test";

        spyOn(console, "log");
        component.searchValue = searchInput;
        component.onSubmit();
        expect(console.log).toHaveBeenCalledWith("Search input value: ", searchInput);
    });
});