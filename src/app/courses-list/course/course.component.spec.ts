import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseComponent } from "./course.component";

describe("CourseComponent", () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        component.course = {
            creationDate: new Date(0),
            description: "Testing Course And something",
            duration: 10,
            id: 123,
            title: "Testing Course"
        };
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should emit correct id when onDelete called", () => {
        spyOn(component.removeItem, "emit");
        component.onDelete(new MouseEvent("click"));
        fixture.detectChanges();
        expect(component.removeItem.emit).toHaveBeenCalledWith(component.course.id);
    });
});
