import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkPasswords } from '../validators/checkPassword';
import { CompanyTypes } from './enums/enums';

@Component({
  selector: 'app-reg-list',
  templateUrl: './reg-list.component.html',
  styleUrls: ['./reg-list.component.css']
})
export class RegListComponent implements OnInit {

  CompanyTypes = CompanyTypes;

  form: FormGroup = new FormGroup(
    {
    account:new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(''),
    }),
    profile: new FormGroup({
      name: new FormControl(''),
      phone: new FormControl('', Validators.required),
      city: new FormControl(''),
    }),
    company: new FormGroup({
      name: new FormControl(''),
      ownership: new FormControl(''),
      TIN: new FormControl('', [Validators.required, Validators.minLength(9)]),
      checkpoint: new FormControl('', [Validators.required, Validators.minLength(9)]),
      OKPO: new FormControl('', [Validators.required, Validators.minLength(8)]),
      date: new FormControl(''),
    }),
    contacts: new FormArray([])
  
  },
  { 
    validators: [checkPasswords] 
  },
  );
  constructor() { }

  ngOnInit(): void {
  }

  addContact(): void {
    (this.form.get('contacts') as FormArray).push(
       new FormGroup({
         name: new FormControl(''),
         title: new FormControl(''),
         phone: new FormControl('', Validators.required),
       })
     );
   }
 
   getContactsControls(): AbstractControl[] {
     return (this.form.get('contacts') as FormArray).controls;
   }

  submit(): void {
    console.log(this.form.value);
  }

}
