import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({ 
    selector: 
        `input[type=url][formControlName],
        input[type=url][formControl],
        input[type=url][ngModel]`, 
    providers:[{
       provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true
    }]
})
export class UrlValidatorDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const urlLink = control.value as string;
        if(urlLink){
         const isWithHttpOrHttps: boolean = urlLink.startsWith(`http://`) || urlLink.startsWith(`https://`)
         const isEndWithDotDomain: boolean = urlLink.match(/\.[a-z]{2,}$/) ? true : false;

         const errors: Record<string, boolean> = {
            mustStartWithHttpOrHttps: isWithHttpOrHttps,
            mustEndWithDotDomain: isEndWithDotDomain,
        }
        return Object.keys(errors).reduce((a,c) => {
            if(!errors[c]){
                return {...a, [c]: true}
            } else{
                return a;
            }
        }, {})
    }
        return null

    }
}
