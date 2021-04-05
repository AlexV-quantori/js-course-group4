// @ts-ignore
import {AbstractControl, ValidationErrors} from "@angular/forms";

export function checkPasswordEquality(form: AbstractControl): ValidationErrors | null {
  const password: string = form.get('password')!.value;
  const confirmPassword: string = form.get('confirmPassword')!.value;

  if (password === confirmPassword) {
    return null;
  }

  form.get('confirmPassword')!.setErrors({ notSame: true });

  return { notSame: true };
}
