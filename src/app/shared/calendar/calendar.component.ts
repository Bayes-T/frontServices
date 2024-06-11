import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  constructor(public dialogRef: MatDialogRef<CalendarComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      {title: 'event3', start: '2024-06-09T12:30:00', end: '2024-06-09T13:30:00'},
      {title: 'Libre', start: '2024-06-09T13:30:00', end: '2024-06-09T14:30:00'}
    ]
  };

  handleDateClick(arg:any) {
    //enviar peticion http para agendar cita
    //hacer que se vea en el calendario
    alert('date click! ' + arg.dateStr)
  }
}
