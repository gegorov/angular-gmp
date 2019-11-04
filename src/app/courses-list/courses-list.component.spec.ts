import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesListComponent } from "./courses-list.component";
import { CourseComponent } from "./course/course.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { ServiceModule } from "../core/services/index";

import { CourseService} from "../core/services/index";
import { COURSES} from "../core/helpers/mock-courses";
import { of } from "rxjs";


describe("CoursesListComponent", () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    let courseService: CourseService;
    const CourseServiceStub: Partial<CourseService> = {
        getCourses: () => of(COURSES)
    };



    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesListComponent, CourseComponent, SearchComponent],
            imports: [FormsModule],
            providers: [{provide: CourseService, useValue: CourseServiceStub}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        courseService = TestBed.get(CourseService);
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

    it("should call courseService in ngOnInit", () => {
        const getCoursesSpy = spyOn(courseService, "getCourses");
        component.ngOnInit();
        expect(getCoursesSpy).toHaveBeenCalled();
    });
});
