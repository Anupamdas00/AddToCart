import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCon'
})
export class CurrencyConPipe implements PipeTransform {

  transform(value: number, args: number): unknown {
    let price = args;
    let estPrice = value * price
    return Math.trunc(estPrice)
  }

}
