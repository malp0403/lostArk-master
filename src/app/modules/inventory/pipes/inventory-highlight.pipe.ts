import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inventoryHighlight'
})
export class InventoryHighlightPipe implements PipeTransform {

  transform(value: string, seachValue:string): string {

    return value;
  }

}
