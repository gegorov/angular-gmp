import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { CourseService, ICourse } from "../core/index";
import { OrderByPipe, PopupComponent } from "../shared/index";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {

    private orderByPipe: OrderByPipe;
    private courseService: CourseService;
    private router: Router;

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

    constructor(courseService: CourseService, orderByPipe: OrderByPipe, dialog: MatDialog, router: Router) {
        this.courseService = courseService;
        this.orderByPipe = orderByPipe;
        this.dialog = dialog;
        this.router = router;
    }

    /**
     * Function that receive course  if delete button is clicked
     * and opens a dialog window for confirmation
     */
    public onDeleteNotify(course: ICourse): void {
        const dialogRef: MatDialogRef<PopupComponent> = this.dialog.open(PopupComponent, {
            data: { course }
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.courseService.removeCourse(course.id);
            }
        });
    }

    /**
     * Function that receive course if edit button is clicked
     * and navigates to appropriate page
     */
    public onEditNotify(course: ICourse): void {
        this.router.navigate(["/", "course", course.id, "edit"]);
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
