import { DatePipe } from "@angular/common";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

import * as moment from "moment";

import { ICourse } from "../../core/index";
import { DateValidator, DurationValidator } from "../form-validators/index";


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

        console.log(this.courseForm.value.date);
        console.log(moment(this.courseForm.value.date, "DD-MM-YYYY").format());


        if (this.courseForm.invalid) {
            return;
        }
        this.courseBF = {
            name: this.courseForm.value.name,
            description: this.courseForm.value.description,
            length: this.courseForm.value.length,
            topRated: this.courseForm.value.topRated,
            date: moment(this.courseForm.value.date, "DD-MM-YYYY").format(),
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
            length: new FormControl(length, [Validators.required, DurationValidator.validateDuration]),
            date: new FormControl(
                new DatePipe(navigator.language).transform(date, "dd-MM-yyyy"),
                [Validators.required, DateValidator.validateDate]),
            topRated: new FormControl(topRated)
        });
    }
}
