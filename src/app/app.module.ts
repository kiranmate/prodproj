import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgProgressModule } from 'ngx-progressbar';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { DoctorComponent } from './doctor/doctor/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    Ng2SmartTableModule,
    HttpClientModule
   
  ],
  
  providers: [],
  bootstrap: [AppComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
