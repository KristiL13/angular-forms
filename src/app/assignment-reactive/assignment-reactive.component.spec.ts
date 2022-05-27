import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentReactiveComponent } from './assignment-reactive.component';

describe('AssignmentReactiveComponent', () => {
  let component: AssignmentReactiveComponent;
  let fixture: ComponentFixture<AssignmentReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
