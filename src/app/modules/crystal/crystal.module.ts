import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrystalRoutingModule } from './crystal-routing.moduel';
import { CrystalHomeComponent } from './components/crystal-home/crystal-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrystalHomeComponent,
  ],
  imports: [
    CommonModule,
    CrystalRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CrystalModule { }
