import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ICourse } from "../../core/index";

@Component({
    selector: "app-course-form",
    templateUrl: "./course-form.component.html",
    styleUrls: ["./course-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent {

    private courseBF: ICourse;

    /**
     * Setter to set course that is received from parent component to private
     * variable courseBF
     */
    @Input()
    public set course(course: ICourse) {
        this.courseBF = course;
    }

    /**
     * getter for courseBF
     */
    public get course(): ICourse {
        return this.courseBF;
    }

    /**
     * Event emitter to emit value to parent component
     */
    @Output() public notify: EventEmitter<ICourse> = new EventEmitter();

    /**
     * method that is called onSubmit
     */
    public onSubmit(event) {
        event.preventDefault();
        this.notify.emit(this.courseBF);
    }
}
