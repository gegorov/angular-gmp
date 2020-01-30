import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[appValidDate]",
    providers: [
        { provide: NG_VALIDATORS, useExisting: DateValidator, multi: true }
    ]
})
export class DateValidator implements Validator {

    static validateDate(control: FormControl): ValidationErrors {

        if (control.pristine) {
            return null;
        }

        const numberREgExp: RegExp = new RegExp("^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$");
        control.markAsTouched();
        if (numberREgExp.test(control.value)) {
            return null;
        }
        return {
            date: "Wrong date"
        };
    }

    validate(control: FormControl): ValidationErrors | null {
        return DateValidator.validateDate(control);
    }

}
