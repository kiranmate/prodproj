import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Reg } from './reg';
import { RegValidators } from './reg.validators';


@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {
   frmgroup:FormGroup
  constructor(private fb:FormBuilder) {


   }
 ngOnInit() {
let data:Reg={
  usnm:'kkk',
  em:'mm',
  pass:'klm'
}
 let usNmvld=Validators.compose([
  Validators.required,
 RegValidators.isStartWithA
])
 let emlvl=Validators.compose(
 [
    Validators.required,
    Validators.email
 ])
   this.frmgroup=this.fb.group({
    usnm:this.fb.control('',usNmvld),
    em:this.fb.control('',emlvl, RegValidators.taken),

    pass:this.fb.control('',Validators.required),

   })
   console.log(this.frmgroup)
  }
   onsub()
   {
    //this.frmgroup.patchValue({'usnm':'angular'}) 
    console.log(this.frmgroup)

   }
 
   
}
