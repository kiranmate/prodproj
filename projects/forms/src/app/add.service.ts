import { Observable, interval } from 'rxjs';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/interval'

@Injectable({
  providedIn: 'root'
})
export class AddService {
  
  constructor() { }

  obsAds(){
    return interval(1500)
}
}
export interface Ad{
nm:string
img:string

}

