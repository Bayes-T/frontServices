import {Component, Input} from '@angular/core';
import {CalendarComponent} from "../../../shared/calendar/calendar.component";


@Component({
  selector: 'home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() { }

  @Input()
  public email: string = "";
  @Input()
  public phone: string = "";
  @Input()
  public location: string = "";

}


