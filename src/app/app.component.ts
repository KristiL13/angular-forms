import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  defaultUserName = 'mingi_nimi';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('submitted');
  //   console.log(form);
  // }

  // Using ViewChild here is especially useful if you need to access
  // the data on the form also before the user actually submits it.
  onSubmit() {
    console.log(this.signupForm);
  }
}
