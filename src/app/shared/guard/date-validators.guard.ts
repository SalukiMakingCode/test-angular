import {AbstractControl, ValidatorFn} from "@angular/forms";

export function DateValidators() : ValidatorFn {
  return (control: AbstractControl) => {
    // let value : Date = control.value;
    // const dateToday : Date = new Date();
    //
    // if (value == null) return {'emptyInput' : 'Cette date est invalide'};
    //
    // let isValidDate = Date.parse(value.toDateString());
    //
    // if (isNaN(isValidDate)) {
    //    return {'notOneValidDate' : 'Cette date est invalide'};
    // }
    //
    // if (dateToday.getFullYear() - value.getFullYear() < 13) {
    //   return {'tooYoung' : 'Vous êtes trop jeune'};
    // }
    //
    // return null;
    console.log("je passe ici")
    let maDate : Date = new Date(control.value)
    if(control.value == null) return null;
    if(maDate.getFullYear() <= (new Date().getFullYear() -13)) {
      console.log("je passe ici")
      return null;
    }
    else return {dateError : 'Vous êtes trop jeune'}
  }
}
