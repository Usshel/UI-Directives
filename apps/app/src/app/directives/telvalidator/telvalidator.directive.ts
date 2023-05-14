import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({ selector: 
'input[type=tel][formControlName],input[type=tel][formControl],input[type=tel][ngModel]',
providers:[{
    provide: NG_VALIDATORS, useExisting: TelvalidatorDirective, multi: true
 }]
})
export class TelvalidatorDirective implements Validator {
    @Input() pattern: string = ''
    
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const phone = control.value as string;
        if(this.pattern) {
            return phone.match(this.pattern) ? null : {invalid: true}
        }
        return null
    }
    
   


}
