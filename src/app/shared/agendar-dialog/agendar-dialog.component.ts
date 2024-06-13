import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CalendarService} from "../services/calendar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agendar-dialog',
  templateUrl: './agendar-dialog.component.html',
  styleUrls: ['./agendar-dialog.component.css']
})
export class AgendarDialogComponent{

  constructor(public calendarService: CalendarService, public dialogRef: MatDialogRef<AgendarDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public router: Router) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Agendar(data:string){
    this.calendarService.setDate(data);
    this.router.navigateByUrl('/payform');
    this.onNoClick();
  }
}
