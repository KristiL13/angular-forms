import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTdComponent } from './assignment-td.component';

describe('AssignmentTdComponent', () => {
  let component: AssignmentTdComponent;
  let fixture: ComponentFixture<AssignmentTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
