import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        // Kolmas parameeter on Async validator või nende Array. Kuna forbiddenEmails
        // funktsiooni sisu ei sisalda this-i, siis ei pea bindima.
        'email2': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
    // Siin kogu vormi muutuse kuulamine. Saab ka üksiku välja kaupa kuulata.
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // Staatuse muutumise kuulamine: INVALID, PENDING, VALID
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    // Saab ka kasutada setValue() ja patchValue() meetodeid.
    this.signupForm.setValue({
      'userData2': {
        'username2': 'Kristi',
        'email2': 'mingi@kiri.ee'
      },
      'gender': 'female',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData2': {
        'username2': 'Anna',
      },
    });
  }
  
  onSubmit() {
    console.log(this.signupForm);
    // You can pass an object to reset() to reset to specific values.
    this.signupForm.reset({
      'gender': 'male'
    });
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

  // Creating custom Async validator.
  // Valideerimise ootamise ajal on väljal klass ng-pending.
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
