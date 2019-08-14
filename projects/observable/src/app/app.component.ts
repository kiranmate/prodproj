import { Subscriber, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObsService } from './obs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'observable';
  obsSub:Subscription
  constructor(private service:ObsService){
   

  }
  ngOnInit(){
   this.obsSub= this.service.myobs().subscribe(
    it =>console.log(it),
    err =>console.log(err),
    ()=>console.log(`processing completed`)

    )

    

    }
    ngOnDestroy(){
     this.obsSub.unsubscribe()
    
  }
}
