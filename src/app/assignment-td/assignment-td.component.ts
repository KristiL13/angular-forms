import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-td',
  templateUrl: './assignment-td.component.html',
  styleUrls: ['./assignment-td.component.css']
})
export class AssignmentTdComponent implements OnInit {
  @ViewChild('form') myForm: NgForm;
  defaultSubscription = 'advanced';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
