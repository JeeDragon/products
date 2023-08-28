import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return `Product Price: $${value}`;
  }
}
