import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryHomeComponent } from './components/inventory-home/inventory-home.component';
import { InventoryTestComponent } from './components/inventory-test/inventory-test.component';
import { SharedModule } from '../shared/shared.module';
import { InventoryNewComponent } from './components/inventory-new/inventory-new.component';
import { InventoryHighlightPipe } from './pipes/inventory-highlight.pipe';


@NgModule({
  declarations: [
    InventoryHomeComponent,
    InventoryTestComponent,
    InventoryNewComponent,
    InventoryHighlightPipe
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
