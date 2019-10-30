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
     * Function that receive course id if delete button is clicked
     * @param value id that is emitted by course component
     */
    public onNotify(value: number): void {
        console.log("Delete movie with ID# ", value);
    }

    public loadMore(): void {
        console.log("Load More!");
    }

    public ngOnChanges(): void {
        console.log("ngOnChanges");
    }

    public ngOnInit(): void {
        console.log("ngOnInit");
        this.courses$ = this.courseService.getCourses();
    }
    public ngDoCheck(): void {
        console.log("DoCheck");
    }

    public ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }

    public ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    public ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }

    public ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }

    public ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }

}
