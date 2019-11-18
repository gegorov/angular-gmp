import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

import { CourseService, ICourse } from "../core/index";
import { OrderByPipe, PopupComponent } from "../shared/index";

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

    /**
     * variable for popup
     */
    public dialog: MatDialog;

    private orderByPipe: OrderByPipe;

    private courseService: CourseService;

    constructor(courseService: CourseService, orderByPipe: OrderByPipe, dialog: MatDialog) {
        this.courseService = courseService;
        this.orderByPipe = orderByPipe;
        this.dialog = dialog;
    }

    /**
     * Function that receive course id if delete button is clicked
     * @param value id that is emitted by course component
     */
    public onNotify(value: number): void {
        console.log("Delete movie with ID# ", value);
        this.dialog.open(PopupComponent, {
            data: { id: value },
        });
    }

    /**
     * Function that receives search string from search component and filters courses
     * @param value search string that is emitted by search component
     */
    public onSearchNotify(value: string): void {
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
        this.courses$ = this.courseService.getCoursesList().pipe(tap(data => this.orderByPipe.transform(data)));
    }

}
