import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'datearg'
})
export class DatePipe implements PipeTransform {

  transform(value: any): string {
    const valueString = value.toString();
    const dateArray = valueString.split(" ");
    return dateArray[1] + ' ' + dateArray[2] + ' ' + dateArray[3] + ' ' +dateArray[4] + ' (Horario Argentina)';
  }

}
