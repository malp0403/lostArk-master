import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crystal-home',
  templateUrl: './crystal-home.component.html',
  styleUrls: ['./crystal-home.component.scss']
})
export class CrystalHomeComponent implements OnInit{
  form?:FormGroup;
  compareForm?:FormGroup;
  compareRoyalForm?:FormGroup;
  
  readonly standardRcPerDollar = 12000/106.61;
  readonly crystalPerRc  = 3600/8460;
  readonly crystalPerRcWeekly = 2000/4500;
  readonly crystalPerRcMonthly  = 3600/8000;

  goldPerDollar:number =0;
  constructor(private fb:FormBuilder,private CdRef:ChangeDetectorRef){
    
  }
  ngOnInit(): void {

    this.form=  new FormGroup({
      gold:this.fb.control(2500),
      targetGold:this.fb.control(100000),
      royalCrystal:this.fb.control(null),
      blueCrylstal:this.fb.control(null),
      blueCrylstalGOld:this.fb.control(null)
    })

    this.compareForm = new FormGroup({
      compareItems:this.fb.array([])
    })
    this.addCompareItem("S shard",199,20,112);
    this.addCompareItem("M shard",400,20,224);
    this.addCompareItem("L shard",621,20,291);

    this.compareRoyalForm = new FormGroup({
      compareItems:this.fb.array([])
    })

    this.formChanges();
  
    this.calculateGoldPerDollar();

  }

  get compareItems(){
    return this.compareForm?.controls["compareItems"] as FormArray;
  }

  get compareRoyalItems(){
    return this.compareRoyalForm?.controls["compareItems"] as FormArray;
  }

  addCompareItem(name:string="",goldCost=0,amount=0,crystal=0,iscompared=false){
    let fg = this.fb.group({
      name:this.fb.control(name),
      goldCost:this.fb.control(goldCost),
      amount:this.fb.control(amount),
      crystalCost:this.fb.control(crystal),
      goldToDollar:this.fb.control(0),
      crystalToDollar:this.fb.control(0),
      winner:this.fb.control(null)
    })
    this.compareItems.push(fg);
    console.log("this.compareItems.length:",this.compareItems.length);

  }

  addCompareRoyalItem(name:string="",goldCost=0,amount=0,crystal=0,iscompared=false){
    let fg = this.fb.group({
      name:this.fb.control(name),
      goldCost:this.fb.control(goldCost),
      amount:this.fb.control(amount),
      crystalCost:this.fb.control(crystal),
      goldToDollar:this.fb.control(0),
      crystalToDollar:this.fb.control(0),
      winner:this.fb.control(null)
    })
    this.compareRoyalItems.push(fg);
    console.log("this.compareItems.length:",this.compareItems.length);

  }

  deleteCompareItem(lessonIndex: number) {
    this.compareItems.removeAt(lessonIndex);
  }

  compare(index:number){
    console.log(this.compareItems.controls[index]);
    let {goldCost,crystalCost,amount} = this.compareItems.controls[index].getRawValue();
    let GoldToDollar = goldCost *amount/ this.goldPerDollar;
    let CrystalToDollar = crystalCost / (this.crystalPerRc * this.standardRcPerDollar);

    this.compareItems.controls[index].get('goldToDollar')?.patchValue(GoldToDollar);
    this.compareItems.controls[index].get('crystalToDollar')?.patchValue(CrystalToDollar);

    console.log(GoldToDollar, CrystalToDollar);

    if(GoldToDollar>CrystalToDollar){
      this.compareItems.controls[index]?.get('winner')?.patchValue("Gold")
    }else{
      this.compareItems.controls[index]?.get('winner')?.patchValue("Crystal")
    }
  }

  compareRoyal(index:number){
    let {goldCost,crystalCost,amount} = this.compareRoyalItems.controls[index].getRawValue();
    let GoldToDollar = goldCost *amount/ this.goldPerDollar;
    let CrystalToDollar = crystalCost / (this.standardRcPerDollar);

    this.compareRoyalItems.controls[index].get('goldToDollar')?.patchValue(GoldToDollar);
    this.compareRoyalItems.controls[index].get('crystalToDollar')?.patchValue(CrystalToDollar);

    console.log(GoldToDollar, CrystalToDollar);

    if(GoldToDollar>CrystalToDollar){
      this.compareRoyalItems.controls[index]?.get('winner')?.patchValue("Gold")
    }else{
      this.compareRoyalItems.controls[index]?.get('winner')?.patchValue("Crystal")
    }
  }


  formChanges(){
    this.form?.get('gold')?.valueChanges.subscribe(res=>{
      this.calculateGoldPerDollar();
      this.CdRef.detectChanges();
    })


  }


  calculateGoldPerDollar(){
    this.goldPerDollar =  this.form?.get('gold')?.value /238 * this.standardRcPerDollar ;
  }

  updateTargetGold(){
    this.CdRef.detectChanges();
  }

}
