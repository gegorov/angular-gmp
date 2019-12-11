import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, publishReplay, refCount, tap } from "rxjs/operators";

import { CourseService, ICourse } from "../../core/index";
import { OrderByPipe, PopupComponent } from "../../shared/index";

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
                this.courseService.removeCourse(course.id).subscribe();
                this.router.navigate(["/courses"]);
            }
        });
    }

    /**
     * Function that receive course if edit button is clicked
     * and navigates to appropriate page
     */
    public onEditNotify(course: ICourse): void {
        this.router.navigate(["/", "courses", course.id]);
    }

    /**
     * Function that receives search string from search component and filters courses
     * @param value search string that is emitted by search component
     */
    public onSearchNotify(value: string): void {
        this.courseService.query$.next(value);
    }

    /**
     * Load more button handler
     */
    public loadMore(): void {
        const incrementByFive: number = 5;
        const currentValue: number = this.courseService.page$.value;

        this.courseService.page$.next(currentValue + incrementByFive);
    }

    /**
     * In this method we set observable to this.courses$
     */
    public ngOnInit(): void {
        this.courses$ = this.courseService.getCourses().pipe(
            map(data => this.orderByPipe.transform(data)),
            publishReplay(1),
            refCount()
        );
    }
}
