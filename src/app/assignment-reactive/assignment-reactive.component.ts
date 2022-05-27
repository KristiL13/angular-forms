import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-assignment-reactive',
  templateUrl: './assignment-reactive.component.html',
  styleUrls: ['./assignment-reactive.component.css']
})
export class AssignmentReactiveComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required
        // , this.forbiddenProjectName
        , CustomValidators.invalidProjectName // Kui this oleks ka sees, siis jälle bindida.
      ]
      // , this.forbiddenProjectNameAsync
      , CustomValidators.asyncInvalidProjectName
      ),
      'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    });
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'forbiddenName': true}
    }
    return null;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'forbiddenName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
