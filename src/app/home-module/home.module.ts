import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {MaterialModule} from "../material-module/material.module";
import { ContactComponent } from './components/contact/contact.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomecardComponent } from './components/homecard/homecard.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ContactComponent,
    ChatComponent,
    HomecardComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
