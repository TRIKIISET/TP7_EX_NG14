import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { ListemployesComponent } from './listemployes/listemployes.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    ListemployesComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
