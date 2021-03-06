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
  answer = '';
  genders = ['male', 'female'];
  // see user siin on täiesti uus JS objekt ja ei pea vastama vormile.
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Vormi eeltäitmisel mingite väärtustega ViewChild ja setValue abil
    // peame kasutama JS objekti, mis vastab täpselt kogu vormi objektile.
    // See overrideib kõik kasutaja poolt varem sisestatud väärtused.
    // See ei pruugi olla kõige sobivam meetod, kuna kirjutab asju üle.
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'Nelly',
    //   gender: 'female'
    // })

    // Siin saab üle kirjutada ka ainult mõndasid väärtuseid. Struktuur peab
    // küll selle väljani vastama vormi struktuurile.
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    // siin toimib setValue ka.

    // setValue - kogu vormi andmete määramiseks
    // patchValue - mingi vormi osa andmete määramiseks
  }

  // onSubmit(form: NgForm) {
  //   console.log('submitted');
  //   console.log(form);
  // }

  // Using ViewChild here is especially useful if you need to access
  // the data on the form also before the user actually submits it.
  onSubmit() {
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }
}
