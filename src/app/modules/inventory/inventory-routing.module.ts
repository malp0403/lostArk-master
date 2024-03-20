import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryHomeComponent } from './components/inventory-home/inventory-home.component';

const routes: Routes = [{
  path:'',
  component:InventoryHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
