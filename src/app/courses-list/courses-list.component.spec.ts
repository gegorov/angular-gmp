import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesListComponent } from "./courses-list.component";
import { CourseComponent } from "./course/course.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { ServiceModule } from "../core/services/index";

describe("CoursesListComponent", () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesListComponent, CourseComponent, SearchComponent],
            imports: [FormsModule, ServiceModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should call console.log when clicked on LoadMore", () => {
        spyOn(console, "log");
        const message = "Load More!";

        const nativeElement = fixture.nativeElement;
        const button = nativeElement.querySelector(".load-more button");
        button.dispatchEvent(new Event("click"));

        fixture.detectChanges();
        expect(console.log).toHaveBeenCalledWith(message);

    });

    it("should call console.log when onNotify method called", () => {
        spyOn(console, "log");
        const data = 123;

        component.onNotify(data);
        fixture.detectChanges();
        expect(console.log).toHaveBeenCalledWith("Delete movie with ID# ", data);
    });
});
