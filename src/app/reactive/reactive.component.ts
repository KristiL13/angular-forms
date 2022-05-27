import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // initializing my form:
    this.signupForm = new FormGroup({
      // form controls are key-value pairs in here
      'userData2': new FormGroup({
        'username2': new FormControl(null, Validators.required),
        // See required ei peaks olema meetodi välja kutsumine ehk required(),
        // vaid ainult referents, et millist meetodit välja kutsuda kui input muutub.
        'email2': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getHobbyControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
