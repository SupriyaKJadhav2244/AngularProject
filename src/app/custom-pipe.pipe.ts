import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string,gender: string,married:string): string {
    if(gender.toLowerCase()=="female"){
      if(married.toLowerCase()=='yes'){ 
        return "Ms. "+value;
      }else{
        return "Miss. "+value;
      } 
    }else{
      return "Mr. "+value;
    }
  }

}
