import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-craft-home',
  templateUrl: './craft-home.component.html',
  styleUrls: ['./craft-home.component.scss']
})
export class CraftHomeComponent implements OnInit {

  form?: FormGroup;
  craftPer:number=0;
  markerPer:number=0;

  constructor(public fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.form = this.fb.group({
      craftAmount: this.fb.control(15),
      craftGold: this.fb.control(267),
      marketPrice: this.fb.control(63),
      marketAmount: this.fb.control(1),
      items: this.fb.array([])
    })
    this.addItem("Oreha Solar Carp",52,21,10);
    this.addItem("Natural Pearl",69,5,10);
    this.addItem("Fish",142,322,100);

  }

  get itemCtrls() {
    return this.form?.controls["items"] as FormArray;
  }

  addItem(name="",amount=0,gold=0,marketAmount=0) {
    let fg = this.fb.group({
      name:this.fb.control(name),
      amount: this.fb.control(amount),
      gold: this.fb.control(gold),
      marketAmount: this.fb.control(marketAmount)
    })
    this.itemCtrls.push(fg);
  }

  deleteCompareItem(lessonIndex: number) {
    this.itemCtrls.removeAt(lessonIndex);
  }

  calculate() {
    let sum =0;
    let values = this.itemCtrls.getRawValue();
    console.log(values);
    values.forEach(v=>{
      let {amount,gold,marketAmount} = v;
      sum += gold/marketAmount * amount;
    })

    var { craftAmount,
      craftGold,
      marketPrice,
      marketAmount} = this.form?.getRawValue();
    sum +=craftGold;

    this.craftPer = sum/craftAmount;

    this.markerPer = marketPrice/marketAmount;


  }

}
