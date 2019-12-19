import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { debounceTime, filter, map, publishReplay, refCount, tap } from "rxjs/operators";

import { CourseService, ICourse } from "../../core/index";
import { OrderByPipe, PopupComponent } from "../../shared/index";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit, AfterViewInit, OnDestroy {

    private orderByPipe: OrderByPipe;
    private courseService: CourseService;
    private router: Router;
    private subscription: Subscription;

    /**
     * Variable that helps to get access to EventEmitter in child  Search component
     */
    @ViewChild(SearchComponent, { static: false }) public searchComponent: SearchComponent;

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
     * Load more button handler that triggers loadMore method on courseService
     */
    public loadMore(): void {
        const incrementByFive: number = 5;
        this.courseService.loadMore(incrementByFive);
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

    public ngAfterViewInit(): void {
        const minQueryLength: number = 3;
        const delayTime: number = 400;

        this.subscription = this.searchComponent.notify
            .pipe(
                filter((value: string) => value.length >= minQueryLength),
                debounceTime(delayTime)
            )
            .subscribe((value) => {
                this.courseService.nextQuery(value);
            });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
