import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Appointment} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseURL:string = ""

  public date:string = "";
  setDate(mydate:string):void {
    this.date=mydate;
  }

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseURL}/appointments`)
  }

  getAppointmentById(id: string): Observable<Appointment | undefined>{
    return this.http.get<Appointment | undefined>(`${this.baseURL}/appointments/${id}`).pipe(
      catchError(error => of(undefined))
    )
  }

  addAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(`${this.baseURL}/appointments`, appointment)
  }

  updateAppointment(appointment: Appointment): Observable<Appointment>{
    if (!appointment.id) throw Error('El id del héroe es requerido')
    return this.http.patch<Appointment>(`${this.baseURL}/appointments/${appointment.id}`, appointment)
  }

  deleteAppointment(id:string):Observable<boolean>{
    return this.http.delete(`${this.baseURL}/${id}`).pipe(
      catchError(error => of(false)),
      map(resp => true)
    )
  }
}
