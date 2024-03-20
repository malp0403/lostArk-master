import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrystalHomeComponent } from './components/crystal-home/crystal-home.component';

const routes: Routes = [{
    path:'',
    component:CrystalHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrystalRoutingModule { }
