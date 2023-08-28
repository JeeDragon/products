import { Pipe, PipeTransform } from '@angular/core';

/**
 * Money Pipe for products price.
 * @date 8/28/2023 - 4:48:51 PM
 *
 * @export
 * @class MoneyPipe
 * @typedef {MoneyPipe}
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  
  /**
   * Transforms the value into a product price string.
   * @date 8/28/2023 - 4:48:58 PM
   *
   * @param {string} value
   * @param {...unknown[]} args
   * @returns {unknown}
   */
  transform(value: string, ...args: unknown[]): unknown {
    return `Product Price: $${value}`;
  }
}
