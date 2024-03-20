import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CraftHomeComponent } from './components/craft-home/craft-home.component';
import { CraftRoutingModule } from './craft-routing.moduel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CraftPrimeComponent } from './components/craft-prime/craft-prime.component';
import { CraftSuperiorComponent } from './components/craft-superior/craft-superior.component';



@NgModule({
  declarations: [
    CraftHomeComponent,
    CraftPrimeComponent,
    CraftSuperiorComponent
  ],
  imports: [
    CommonModule,
    CraftRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CraftModule { }
