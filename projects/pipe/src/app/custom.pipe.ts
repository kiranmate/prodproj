import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphen'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, pos?: number): string {
   let part1=value.substring(0,2)         //angular---an
   let part2=value.substring(pos,value.length)   // pos=2 by hyphen:2 i.e 2 to 6 --gular
   return `${part1}-${part2}`             //an-gular
    
  }

}
