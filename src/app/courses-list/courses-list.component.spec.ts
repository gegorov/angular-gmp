import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { CoursesListComponent } from "./courses-list.component";
import { CourseComponent } from "./course/course.component";
import { SearchComponent } from "./search/search.component";

import { DurationPipe, FilterPipe, OrderByPipe } from "../shared/index";
import { CourseService } from "../core/index";

describe("CoursesListComponent", () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    let courseServiceStub: jasmine.SpyObj<CourseService>;

    beforeEach(async(() => {
        courseServiceStub = jasmine.createSpyObj("CourseService", ["getCourses"]);

        TestBed.configureTestingModule({
            declarations: [CoursesListComponent, CourseComponent, SearchComponent, DurationPipe, FilterPipe, OrderByPipe],
            imports: [FormsModule],
            providers: [{ provide: CourseService, useValue: courseServiceStub }]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(CoursesListComponent);
                component = fixture.componentInstance;
                // fixture.detectChanges();
            });
    }));

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should call console.log when clicked on LoadMore", () => {
        spyOn(console, "log");
        const message: string = "Load More!";

        const nativeElement: Element = fixture.nativeElement;
        const button: Element = nativeElement.querySelector(".load-more button");
        button.dispatchEvent(new Event("click"));

        fixture.detectChanges();
        expect(console.log).toHaveBeenCalledWith(message);
    });

    it("should call console.log when onNotify method called", () => {
        spyOn(console, "log");
        const data: number = 123;

        component.onNotify(data);
        fixture.detectChanges();
        expect(console.log).toHaveBeenCalledWith("Delete movie with ID# ", data);
    });

    it("should call courseService in ngOnInit", () => {
        fixture.detectChanges();
        expect(courseServiceStub.getCoursesList).toHaveBeenCalled();
    });
});
