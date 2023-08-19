import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      key: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      pass: new FormControl('', [Validators.minLength(8)]),
      curp: new FormControl('', [Validators.minLength(18), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      rfc: new FormControl('', [Validators.minLength(13), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      nss: new FormControl('', [Validators.minLength(11), Validators.pattern(/^[0-9]*$/)]),
    });
    // set uppercase to curp
    this.curpControl.valueChanges.subscribe((value) => {
      this.curpControl.setValue(value.toUpperCase(), { emitEvent: false });
    });
  }

  ngOnInit(): void {}

  get nameControl() { return this.userForm.get('name') as FormControl; }
  get keyControl() { return this.userForm.get('key') as FormControl; }
  get emailControl() { return this.userForm.get('email') as FormControl; }
  get passControl() { return this.userForm.get('pass') as FormControl; }
  get curpControl() { return this.userForm.get('curp') as FormControl; }
  get rfcControl() { return this.userForm.get('rfc') as FormControl; }
  get nssControl() { return this.userForm.get('nss') as FormControl; }

  onSubmit() {
    console.log(this.userForm.value);
  }

  simulateRequets() {
    setTimeout(() => {

    }, 500);
  }

}
