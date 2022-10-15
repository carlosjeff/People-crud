import { map } from 'rxjs/operators';
import { PeopleService } from './../../page/people/people.service';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, } from "@angular/forms";
import { Observable } from 'rxjs';

export class ValidatorCustom {


  static maxDateValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if(control.value) {

      const valueDate = new Date(control.value.slice(0,10).split(/[-.\/]/))

      return valueDate > new Date() ? { 'maxDate': true } : null;
    }
    return null;
  }

  static emailExistsValidator(peopleService: PeopleService): AsyncValidatorFn{

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return peopleService
        .emailExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { emailExists: true } : null
          )
        );
    }
  }
}
