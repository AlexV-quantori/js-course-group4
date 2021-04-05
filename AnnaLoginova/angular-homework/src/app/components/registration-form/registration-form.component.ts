import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {checkPasswordEquality} from "../validators/registration/checkPasswordEquality.validator";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  constructor() { }
  ownershipForms: { value: string, viewValue: string }[] = [{value: 'legal', viewValue: 'Legal entity'},
    {value: 'individual', viewValue: 'Individual entrepreneur'}]

  registrationForm: FormGroup = new FormGroup({
    account: new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(''),
    },
      {
        validators: [checkPasswordEquality]
      }
    ),
    profile: new FormGroup({
        name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(17)]),
        city: new FormControl(''),
      }),
    company: new FormGroup({
      name: new FormControl('', [Validators.required]),
      ownershipForm: new FormControl('', [Validators.required]),
      TIN : new FormControl('', [Validators.required, Validators.minLength(9),
        Validators.maxLength(9)]),
      checkpoint: new FormControl('', [Validators.required, Validators.minLength(9),
        Validators.maxLength(9)]),
      OKPO: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.maxLength(8)]),
      formationDate: new FormControl(''),
    }),
    contacts: new FormArray([])
  })

  get contactForms() {
    return this.registrationForm.get('contacts')! as FormArray
  }

  addContact() {
    const contact = new FormGroup({
      name: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(17)]),
    })
    this.contactForms.push(contact)
  }

  deleteContact(index: number) {
    this.contactForms.removeAt(index)
  }

  setCheckpointValidator() {
    const checkpointControl = this.registrationForm.get('company')!.get('checkpoint')!;
    this.registrationForm.get('company')!.get('ownershipForm')!.valueChanges.subscribe(ownershipForm => {
      if (ownershipForm === 'individual') {
        checkpointControl.setValidators([Validators.required, Validators.minLength(9),
          Validators.maxLength(9)])
      }
      else {
        checkpointControl.setValidators(null)
        checkpointControl.setValue(null)
      }
      checkpointControl.updateValueAndValidity();
    })
  }

  ngOnInit(): void {
    this.setCheckpointValidator();
  }

  submit(): void {
    if (this.registrationForm.invalid) {
      Object.keys(this.registrationForm.controls).forEach(
        (control: string) => this.registrationForm.controls[control].markAllAsTouched()
      );

      return;
    }

    console.log(this.registrationForm.value);
  }

}
