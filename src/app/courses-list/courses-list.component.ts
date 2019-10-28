import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from "@angular/core";

import { CourseService, ICourse } from "../core/index";
import { Observable } from "rxjs";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {


    /**
     * Variable to store observable with courses
     */
    public courses$: Observable<Array<ICourse>>;

    private courseService: CourseService;

    constructor(courseService: CourseService) {
        console.log("Constructor");
        this.courseService = courseService;
    }

    /**
     * Function that riecive course id if delete button is clicked
     * @param value id that is emitted by course component
     */
    public onNotify(value: number): void {
        console.log("Delete movie with ID# ", value);
    }

    public loadMore(): void {
        console.log("Load More!");
    }

    ngOnChanges(): void {
        console.log("ngOnChanges");
    }

    ngOnInit(): void {
        console.log("ngOnInit");
        this.courses$ = this.courseService.getCourses();
    }
    ngDoCheck(): void {
        console.log("DoCheck");
    }

    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }

}
