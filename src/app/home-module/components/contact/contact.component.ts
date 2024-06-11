import {Component, Input} from '@angular/core';
import {CalendarComponent} from "../../../shared/calendar/calendar.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public dialog: MatDialog) { }

  @Input()
  public email: string = "";
  @Input()
  public phone: string = "";
  @Input()
  public location: string = "";

  openDialog(): void {
    const dialogRef = this.dialog.open(CalendarComponent, {
      height: '500px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed")
    })
  }

  Agendar(){
    // let dialogRef = dialog.open(CalendarComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
  }
}


