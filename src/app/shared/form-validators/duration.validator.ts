import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[appValidDuration]",
    providers: [
        { provide: NG_VALIDATORS, useExisting: DurationValidator, multi: true }
    ]
})
export class DurationValidator implements Validator {

    static validateDuration(control: FormControl): ValidationErrors {

        if (control.pristine) {
            return null;
        }

        const numberREgExp: RegExp = new RegExp("^[0-9]+$");
        control.markAsTouched();
        if (numberREgExp.test(control.value)) {
            return null;
        }
        return {
            length: "Should have only numbers"
        };
    }

    validate(control: FormControl): ValidationErrors | null {
        return DurationValidator.validateDuration(control);
    }

}
