import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, map, startWith } from 'rxjs';
import { EngravingEnum } from '../../enums/engraving';
import { NegativeEffectEnum } from '../../enums/negative-effect';
import { AccessoryTierEnum } from '../../enums/accessory-tier';
import { AccessoryTypeEnum } from '../../enums/accessory-type';
import { StatsEnum } from '../../enums/stats';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InventoryModel } from '../../models/inventory-model';
import { IgnNamesEnum } from '../../enums/ign-names';

@Component({
  selector: 'app-inventory-new',
  templateUrl: './inventory-new.component.html',
  styleUrls: ['./inventory-new.component.scss']
})
export class InventoryNewComponent implements OnInit, OnDestroy {
  destroyed$: Subject<void> = new Subject<void>();
  accessoryForm?:FormGroup;


  engraving1Options$?:Observable<string[]>;
  engraving2Options$ ?:Observable<string[]>;
  negativeOptions$?:Observable<string[]>;
  accessoryTierOptions$?:Observable<string[]>;
  accessoryTypeOptions$?:Observable<string[]>;
  stats1Options$?:Observable<string[]>;
  stats2Options$?:Observable<string[]>;
  ignNameOptions$?:Observable<string[]>;


  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<InventoryNewComponent>,@Inject(MAT_DIALOG_DATA) public data: {accessory:InventoryModel}){

  }

  ngOnInit(): void {
    this.initForm();
    this.getAllOptions();

  }
  initForm(){
    this.accessoryForm = this.fb.group({
      id:this.fb.control(0),
      engraving1:this.fb.control(EngravingEnum.KeenBluntWeapon.toString()),
      engraving1Val:this.fb.control(3),
      engraving2:this.fb.control(EngravingEnum.RaidCaptain.toString()),
      engraving2Val:this.fb.control(3),
      negative:this.fb.control(NegativeEffectEnum.AtkPower.toString()),
      negativeVal:this.fb.control(1),
      accessoryType:this.fb.control(AccessoryTypeEnum.Ring.toString()),
      accessoryTier:this.fb.control(AccessoryTierEnum.Ancient.toString()),
      stats1:this.fb.control(StatsEnum.Swift.toString()),
      stats2:this.fb.control(null),
      ignName:this.fb.control(IgnNamesEnum.BigblackCoke.toString())
    })
    if(this.data && this.data.accessory){
      this.accessoryForm.patchValue({...this.data.accessory});
    }
  }
  getAllOptions(){
    this.engraving1Options$ = this.accessoryForm?.get('engraving1')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',EngravingEnum)),
    );
    this.engraving2Options$ = this.accessoryForm?.get('engraving2')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',EngravingEnum)),
    );
    this.negativeOptions$ = this.accessoryForm?.get('negative')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',NegativeEffectEnum)),
    );
    this.accessoryTypeOptions$ = this.accessoryForm?.get('accessoryType')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',AccessoryTypeEnum)),
    );
    this.accessoryTierOptions$ = this.accessoryForm?.get('accessoryTier')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',AccessoryTierEnum)),
    );
    this.stats1Options$ = this.accessoryForm?.get('stats1')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',StatsEnum)),
    );
    this.stats2Options$ = this.accessoryForm?.get('stats1')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',StatsEnum)),
    );
    this.ignNameOptions$ = this.accessoryForm?.get('ignName')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '',IgnNamesEnum)),
    );


  }

  private _filter(value: string,source:Object): string[] {
    let options :string[] = [];
    Object.keys(source).forEach(element => {
      options.push(element);
    });
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }


  add(){
    this.dialogRef.close(this.accessoryForm?.getRawValue());
  }

  cancel(){
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
