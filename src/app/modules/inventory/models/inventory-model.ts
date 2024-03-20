import { AccessoryTierEnum } from "../enums/accessory-tier";
import { AccessoryTypeEnum } from "../enums/accessory-type";
import { EngravingEnum } from "../enums/engraving";
import { NegativeEffectEnum } from "../enums/negative-effect";
import { StatsEnum } from "../enums/stats";

export class InventoryModel {
    id:number=0;
    // engraving1Id?:EngravingEnum=EngravingEnum.MassIncrease;
    engraving1?:string=EngravingEnum[EngravingEnum.MassIncrease];
    engraving1Val:number =3;
    // engraving2Id?:EngravingEnum=EngravingEnum.MassIncrease;
    engraving2?:string=EngravingEnum[EngravingEnum.MassIncrease];
    engraving2Val:number=3;
    // negativeId?:NegativeEffectEnum=NegativeEffectEnum.AtkPower;
    negative?:string =NegativeEffectEnum[NegativeEffectEnum.AtkPower];
    negativeVal?:number =1;
    accessoryType?:AccessoryTypeEnum =AccessoryTypeEnum.Earring;
    // accessoryTypeDesc?:string =AccessoryTypeEnum[AccessoryTypeEnum.Earring];
    accessoryTier?:AccessoryTierEnum = AccessoryTierEnum.Ancient;
    // stats1Id?:StatsEnum = StatsEnum.SWIFT;
    stats1?:string = StatsEnum[StatsEnum.Swift]
    // stats2Id?:StatsEnum ;
    stats2?:string;
    ignName?:string = "";
}
