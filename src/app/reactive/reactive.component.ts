import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      'username2': new FormControl(null),
      'email2': new FormControl(null),
      'gender': new FormControl('female')
    });
  }

}
