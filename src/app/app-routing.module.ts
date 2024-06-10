import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./shared/calendar/calendar.component";

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./home-module/home.module').then (m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: '**',
    redirectTo: 'homepage',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
