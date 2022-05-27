import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AssignmentTdComponent } from './assignment-td/assignment-td.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AssignmentReactiveComponent } from './assignment-reactive/assignment-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentTdComponent,
    ReactiveComponent,
    AssignmentReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
