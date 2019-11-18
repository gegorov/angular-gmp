import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CourseService, ICourse } from "../core/index";
import { OrderByPipe } from "../shared/index";
import { tap } from "rxjs/operators";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {
    /**
     * Variable to store observable with courses
     */
    public courses$: Observable<Array<ICourse>>;

    /**
     * Variable that is used for filtering output
     */
    public filterString: string = "";

    private orderByPipe: OrderByPipe;

    private courseService: CourseService;

    constructor(courseService: CourseService, orderByPipe: OrderByPipe) {
        this.courseService = courseService;
        this.orderByPipe = orderByPipe;
    }

    /**
     * Function that receive course id if delete button is clicked
     * @param value id that is emitted by course component
     */
    public onNotify(value: number): void {
        console.log("Delete movie with ID# ", value);
    }

    /**
     * Function that receives search string from search component and filters courses
     * @param value search string that is emitted by search component
     */
    public onSearchNotify(value: string): void {
        console.log("Inside courses-list: ", value);
        this.filterString = value;
    }

    /**
     * Load more button handler
     */
    public loadMore(): void {
        console.log("Load More!");
    }

    /**
     * In this method we set observable to this.courses$
     */
    public ngOnInit(): void {
        this.courses$ = this.courseService.getCourses().pipe(tap(data => this.orderByPipe.transform(data)));
    }

}
