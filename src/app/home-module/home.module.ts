import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {MaterialModule} from "../material-module/material.module";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
