import { Component } from "@angular/core";

import { ICourse, StoreFacadeService } from "../../core/index";

@Component({
    selector: "app-add-course-page",
    templateUrl: "./add-course-page.component.html",
    styleUrls: ["./add-course-page.component.scss"]
})
export class AddCoursePageComponent {
    private storeFacadeService: StoreFacadeService;


    /**
     * Variable with dummy course that ill be passed to form-component to be filled
     */
    public course: ICourse = {
        id: NaN,
        topRated: false,
        length: 0,
        date: (new Date(Date.now())).toUTCString(),
        description: "",
        name: ""
    };

    constructor(storeFacadeService: StoreFacadeService) {
        this.storeFacadeService = storeFacadeService;
    }

    /**
     * method that is called onSubmit
     */
    public onAddNotify(course: ICourse) {
        this.storeFacadeService.addCourse(course);
    }
}
