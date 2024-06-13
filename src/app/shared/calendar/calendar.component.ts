import {Component, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {ActivatedRoute} from "@angular/router";
import {delay, switchMap} from "rxjs";
import {CalendarService} from "../services/calendar.service";
import {MatDialog} from "@angular/material/dialog";
import {AgendarDialogComponent} from "../agendar-dialog/agendar-dialog.component";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  constructor(private calendarService: CalendarService, private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgendarDialogComponent, {
      data: this.date,
      height: '250px',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Obtener los eventos
  ngOnInit(): void {
    this.calendarService.getAppointments().subscribe(resp => this.calendarOptions.events)
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
      {id : '1', title: 'event3', start: '2024-06-10T12:30:00', allDay: false, end: '2024-06-09T13:00:00', color: '#247AFD.'},
    ],
    eventColor: '#247AFD'
  };

  public date:string = "";

  handleDateClick(arg:any) {
    alert('¿Deseas agendar en ' + arg.date + ' ?')
    this.date = arg.date;
    //pipe de arg date
    this.openDialog()
  }


}

