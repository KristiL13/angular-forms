import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      'username2': new FormControl(null, Validators.required),
      // See required ei peaks olema meetodi välja kutsumine ehk required(),
      // vaid ainult referents, et millist meetodit välja kutsuda kui input muutub.
      'email2': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
