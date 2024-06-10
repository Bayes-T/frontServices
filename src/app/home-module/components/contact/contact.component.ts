import {Component, Input} from '@angular/core';

@Component({
  selector: 'home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input()
  public email: string = "";
  @Input()
  public phone: string = "";
  @Input()
  public location: string = "";
}
