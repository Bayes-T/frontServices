import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {HttpClientModule} from "@angular/common/http";
import { AgendarDialogComponent } from './agendar-dialog/agendar-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { DatePipe } from './date.pipe';
import { PayFormComponent } from './pay-form/pay-form.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CalendarComponent,
    AgendarDialogComponent,
    DatePipe,
    PayFormComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
