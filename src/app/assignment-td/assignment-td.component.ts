import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-td',
  templateUrl: './assignment-td.component.html',
  styleUrls: ['./assignment-td.component.css']
})
export class AssignmentTdComponent {
  @ViewChild('form', { static: true }) myForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  onSubmit() {
    console.log(this.myForm.value);
  }
}
