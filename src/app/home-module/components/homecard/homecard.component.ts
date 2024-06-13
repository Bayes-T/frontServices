import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CalendarComponent} from "../../../shared/calendar/calendar.component";


@Component({
  selector: 'homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent {

  constructor() {
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
