import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftHomeComponent } from './components/craft-home/craft-home.component';
import { CraftPrimeComponent } from './components/craft-prime/craft-prime.component';
import { CraftSuperiorComponent } from './components/craft-superior/craft-superior.component';

const routes: Routes = [{
  path: '',
  component: CraftHomeComponent
},
{
  path: 'craft-prime',
  component: CraftPrimeComponent
},{
  path: 'craft-superior',
  component: CraftSuperiorComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraftRoutingModule { }
