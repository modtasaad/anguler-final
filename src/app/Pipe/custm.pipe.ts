import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custm'
})
export class CustmPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
  //   if(args[0]){
  //     return value.split("").join(args[0]).toUpperCase();
  //   }
  //   return value.split("").join("-").toUpperCase();

  // }
  return value.split("").join(args[0]||"-").toUpperCase();

}
}