import { FormGroup, ValidatorFn, AbstractControl } from "@angular/forms";

// export function checkPasswords(form: FormGroup): ValidatorFn | null {
//     const password: string = form.get('password')!.value;
//     const confirmPassword: string = form.get('confirmPassword')!.value;
  
//     if (password === confirmPassword) {
//       return null;
//     }
  
//     form.get('confirmPassword')!.setErrors({ notSame: true });
  
//     return {notSame: true};
//   }


  export function checkPasswords(): ValidatorFn | null {
    return (form: AbstractControl): {[key: string]: any} | null => {
        const password: string = form.get('account.password')!.value;
        const confirmPassword: string = form.get('account.confirmPassword')!.value;
        if (password === confirmPassword) {
            return null;
          }
        return {notSame: {name: 'Password doesnt match', value: 'Change'}}
    };
  }