import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
  standalone: true,
})
export class LimitPipe implements PipeTransform {
  transform(value: string, maxChart: number): string {
    if (value.length <= maxChart) {
      return value;
    } else {
      return value.slice(0, maxChart) + '....';
    }
  }
}
