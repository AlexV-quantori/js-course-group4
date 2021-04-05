import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button";
import { ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from '@angular/material/divider';
import { PhoneMaskDirective } from './components/directives/registration/phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    PhoneMaskDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxIntlTelInputModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PhoneMaskDirective],
})
export class AppModule { }
