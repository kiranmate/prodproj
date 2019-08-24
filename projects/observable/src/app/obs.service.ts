import { error } from 'protractor';
import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  constructor() { }
  
  myobs():Observable<number>{
    return Observable.create(sub=>{
      for(let i=0;i<100;i++){
        if(i>=50) 
        sub.error(new Error(`This is simple error`))
       
        else
        sub.next(i)
       
      }
       sub.complete()
    })
  }

}
