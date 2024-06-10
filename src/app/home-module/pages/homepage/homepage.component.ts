import { Component } from '@angular/core';
import {service} from "../../interfaces/interfaces";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {

  public title:string = "Juana Rodríguez - Psicóloga Clínica";
  public email:string = "juanarod86@gmail.com";
  public phone:string = "+54 9 36738282";
  public location:string = "Buenos Aires, Argentina";

  public services: service[] = [
    {serviceName: "Servicio 1",
    serviceDescription1: "Descripción del producto número 1", serviceDescription2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus viverra turpis. Mauris cursus enim tortor, ac mollis risus semper vel. Mauris consectetur lectus in purus volutpat tempor.",
    serviceIcon: "map"}
  ]
}
