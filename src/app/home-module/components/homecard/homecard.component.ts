import {Component, Input} from '@angular/core';


@Component({
  selector: 'homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent {

  @Input()
  public serviceName:string = "";
  @Input()
  public serviceDescription1:string = "";
  @Input()
  public serviceDescription2:string = "";
  @Input()
  public serviceIcon:string = "";
}
