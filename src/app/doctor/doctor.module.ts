import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorComponent } from './doctor/doctor.component';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    NgbModule,
    Ng2SmartTableModule,
    NgProgressModule
    
  ],
  

 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DoctorModule { }
