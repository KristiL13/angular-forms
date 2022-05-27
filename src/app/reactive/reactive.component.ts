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
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit(): void {
    // initializing my form:
    this.signupForm = new FormGroup({
      // form controls are key-value pairs in here
      'userData2': new FormGroup({
        'username2': new FormControl(null,[ Validators.required, this.forbiddenNames.bind(this)]),
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

  // custom made validator. returns key-value pair, where key is string and value is boolean
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}; 
    }
    return null; // kui Validation on edukas, siis tuleb tagastada null või mitte midagi.
    // false tagastamine ei toimiks valideerimisel.
  }
}
