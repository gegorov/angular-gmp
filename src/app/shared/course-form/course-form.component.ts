import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

import { ICourse } from "../../core/index";

@Component({
    selector: "app-course-form",
    templateUrl: "./course-form.component.html",
    styleUrls: ["./course-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {
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

    public courseForm: FormGroup;

    /**
     * method that is called onSubmit
     */
    public onSubmit(): void {
        if (this.courseForm.invalid) {
            return;
        }
        this.course = {
            name: this.courseForm.value.name,
            description: this.courseForm.value.description,
            length: this.courseForm.value.length,
            topRated: this.courseForm.value.topRated,
            date: this.courseForm.value.date,
            id: this.courseForm.value.id
        };
        this.notify.emit(this.courseBF);
    }

    public ngOnInit(): void {
        this.courseForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(this.course.name, [Validators.required, Validators.maxLength(50)]),
            description: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            length: new FormControl(null, [Validators.required]),
            date: new FormControl([Validators.required]),
            topRated: new FormControl(null)
        });
    }
}
