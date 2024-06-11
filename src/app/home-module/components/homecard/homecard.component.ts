import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CalendarComponent} from "../../../shared/calendar/calendar.component";


@Component({
  selector: 'homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CalendarComponent, {
      height: '650px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed")
    })
  }

  @Input()
  public serviceName:string = "";
  @Input()
  public serviceDescription1:string = "";
  @Input()
  public serviceDescription2:string = "";
  @Input()
  public serviceIcon:string = "";
}
