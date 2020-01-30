import { DatePipe } from "@angular/common";
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
     * Variable to set course that is received from parent component
     */
    @Input() public course: ICourse;

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
        this.courseBF = {
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
        const { id, name, date, description, length, topRated } = this.course;
        this.courseForm = new FormGroup({
            id: new FormControl(id),
            name: new FormControl(name, [Validators.required, Validators.maxLength(50)]),
            description: new FormControl(description, [Validators.required, Validators.maxLength(50)]),
            length: new FormControl(length, [Validators.required]),
            date: new FormControl(new DatePipe(navigator.language).transform(date, "yyyy-MM-dd"), [Validators.required]),
            topRated: new FormControl(topRated)
        });
    }
}
