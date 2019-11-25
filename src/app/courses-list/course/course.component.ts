import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { ICourse } from "../../core/index";

@Component({
    selector: "app-course",
    templateUrl: "./course.component.html",
    styleUrls: ["./course.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
    /**
     * Variable to store course that is received from parent component
     */
    @Input() public course: ICourse;

    /**
     * Eventemitter that is used to notify parent component about which course needs to be deleted
     */
    @Output() public removeItem: EventEmitter<ICourse> = new EventEmitter();

    /**
     * Function that emits course id to parent component
     */
    public onDelete(event: MouseEvent): void {
        event.preventDefault();
        this.removeItem.emit(this.course);
    }
}
