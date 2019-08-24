import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  exp=10
  sal=10
  name='angular'
  date=new Date()
  
  obj={
    nm:'java',
    ver:8,
    vendor:'openjdk'

  }
  cmNm:string

  mobile:Array<Mobile>=[
    {company:'HP', cost:50,os:'android'},

    {company:'DELL', cost:40,os:'windows'},
    
    {company:'LENOVO', cost:36,os:'ios'},
    

  ]

  newMobile(cmp:string,cost:number,os:string){
   let mobile:Mobile={
    company:cmp,
    cost:cost,
    os:os

   }
    this.mobile.push(mobile)
  }
}
export class Mobile{
  company:string
   cost:number
   os:string

}