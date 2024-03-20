import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path: 'crystal',
    loadChildren: () => import('./modules/crystal/crystal.module').then(m => m.CrystalModule)
  },
  {
    path: 'craft',
    loadChildren: () => import('./modules/craft/craft.module').then(m => m.CraftModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
