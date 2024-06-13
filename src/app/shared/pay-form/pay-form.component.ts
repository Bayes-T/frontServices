import {Component, OnInit} from '@angular/core';
import {CalendarService} from "../services/calendar.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css']
})
export class PayFormComponent implements OnInit{

  public date:string = "test";
  public payForm: FormGroup = this.formbuilder.group({});

  constructor(private calendarService: CalendarService, private formbuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.date = this.calendarService.date;
    this.payForm = this.formbuilder.group({
      name: ['', [], []],
      service: ['', [], []],
      date: [this.date, [], []],
      price: ['', [], []]
    })
    }




  onSave():void{
    //enviar peticion http para añadir cita
    if (this.payForm.invalid) return
    console.log(this.payForm.value)
  }

}
