import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input()
  public phone: string = "";
}
