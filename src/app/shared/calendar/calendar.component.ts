import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
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
      plugins: [timeGridPlugin, interactionPlugin],
      initialView: 'timeGridWeek',
      weekends: false,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay',
      },
      slotMinTime: '08:00',
      slotMaxTime: '18:00',
      allDaySlot: false,
      slotEventOverlap: false,
      height: 'auto',
      dateClick: (arg) => this.handleDateClick(arg),
    events: [
      {id : '1', title: 'event3', start: '2024-06-10T12:30:00', allDay: false, end: '2024-06-09T13:00:00', color: '#ff0000'},
      {id : '1', title: 'Libre', start: '2024-06-10T13:30:00', allDay: false, end: '2024-06-09T14:30:00'}
    ],
    eventColor: '#378006'
  };

  handleDateClick(arg:any) {
    //en ONINIT llenar el array eventos desde el servidor
    //enviar peticion http para agendar cita
    alert('date click! ' + arg.date)
  }
}

