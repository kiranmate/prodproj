import { Pipe, PipeTransform } from '@angular/core';
import { Mobile } from './app.component';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(raw: Array<Mobile>,firstcharacter?: string): Array<Mobile> {
    if(firstcharacter)
    {
      
      let filteredMob=new Array<Mobile>()
      raw.forEach(mobile=>{
      if(mobile.company.charAt(0)===firstcharacter){
       filteredMob.push(mobile)  
      }
                    
        })
        return filteredMob;
    }
       return raw
    }
    

  }
