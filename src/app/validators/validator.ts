import {FormControl} from '@angular/forms';

/** 校验正整数*/
export function validNumber(control: FormControl): any {
  let regu = /^[1-9]\d*$/;
  let valid: boolean = regu.test(control.value);
  return valid ? null : {number: true};
}
