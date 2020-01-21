import { Component } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";

import { CourseComponent } from "../../../courses/courses-list/course/course.component";
import { BorderDecoratorDirective } from "./border-decorator.directive";
import { ICourse } from "../../../core/index";
import { DurationPipe, FilterPipe } from "../../../shared/index";
import { calculateMillisecondsFromDays } from "../../../core/helpers/helper-functions";


describe("BorderDecoratorDirective", () => {

    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;


    beforeEach(async () => {
        // TODO: I should ask for some help with understanding why it is so.
        TestBed.configureTestingModule({
            declarations: [CourseComponent, TestHostComponent, BorderDecoratorDirective, DurationPipe, FilterPipe]
        }).compileComponents();
        // .then(() => {
        //     testHostFixture = TestBed.createComponent(TestHostComponent);
        //     testHostComponent = testHostFixture.componentInstance;
        //     testHostFixture.detectChanges();
        //     console.log(1)
        // });
        // console.log(11);
    });

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
    });

    it("should paint border green in new course", () => {
        const testCourse: ICourse = {
            date: "2134",
            description: "test course",
            length: 120,
            id: 0,
            name: "test",
            topRated: false
        };

        testHostComponent.setCourse(testCourse);
        console.log("Green border date: ", testCourse.date);
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector("div").style.border).toEqual("1px solid green");

    });

    it("should paint border blue in new course", () => {
        const testCourse: ICourse = {
            date: `${new Date(new Date().getTime() + calculateMillisecondsFromDays(10))}`,
            description: "test course",
            length: 120,
            id: 0,
            name: "test future",
            topRated: false
        };

        testHostComponent.setCourse(testCourse);

        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector("div").style.border).toEqual("1px solid blue");

    });

    it("should not have border if course is older than 14 days", () => {
        const testCourse: ICourse = {
            date: `${new Date(new Date().getTime() - calculateMillisecondsFromDays(15))}`,
            description: "test course",
            length: 120,
            id: 0,
            name: "test future",
            topRated: false
        };

        testHostComponent.setCourse(testCourse);
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector("div").style.border).toEqual("none");

    });


    @Component({
        selector: `app-test-host-component`,
        template: `
            <app-course [course]="course"></app-course>`
    })
    class TestHostComponent {

        private course: ICourse;

        public setCourse(course: ICourse) {
            this.course = course;
        }
    }

});
