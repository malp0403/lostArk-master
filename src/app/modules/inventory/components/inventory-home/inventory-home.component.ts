import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InventoryModel } from '../../models/inventory-model';
import { InventoryService } from '../../services/inventory.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InventoryNewComponent } from '../inventory-new/inventory-new.component';

@Component({
  selector: 'app-inventory-home',
  templateUrl: './inventory-home.component.html',
  styleUrls: ['./inventory-home.component.scss']
})
export class InventoryHomeComponent implements OnInit, AfterViewInit {
  searchForm?: FormGroup;
  inventories: InventoryModel[] = [];

  displayedColumns: string[] = ['ID', 'Engraving1', 'Value', 'Engraving2', 'Value',
    'negative', 'Value',
    'Stats1', 'Stats2',
    'AccessoryType',
    'AccessoryTier',
    'IgnName',
  'actions'];
  propertyBindingColumns: string[] = ['id', 'engraving1', 'engraving1Val', 'engraving2', 'engraving2Val',
    'negative', 'negativeVal',
    'stats1', 'stats2',
    'accessoryType',
    'accessoryTier',
    'ignName','actions'];
  dataSource = new MatTableDataSource<InventoryModel>(this.inventories);


  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;


  constructor(private fb: FormBuilder, private inventorySrv: InventoryService, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.initForm();
    this.loadData();

  }
  initForm() {
    this.searchForm = this.fb.group({
      searchText: this.fb.control(null)
    })

    this.searchForm.get('searchText')?.valueChanges.subscribe(val => {
      this.dataSource.filter = val.trim().toLocaleLowerCase();
      console.log(val);
    })

  }
  loadData(){
    this.inventorySrv.getData().subscribe(res => {

      let temp = JSON.parse(res.toString());
      this.inventories = temp as InventoryModel[];
      console.log(this.inventories);
      this.refreshTable(true);
    })
  }

  refreshTable(fullRebind = false){
    this.dataSource = new MatTableDataSource(this.inventories);

    if(fullRebind && this.dataSource){
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    }

  }

  download() {
    let data = JSON.stringify(this.inventories);

    // const blob = new Blob([data], { type: 'text/json' });
    // const url = window.URL.createObjectURL(blob);
    // window.open(url);

    var data2, filename, link;

    var csv = 'data:text/json;charset=utf-8,' + JSON.stringify(data);

    var date = new Date();
    filename = date.toString()+'.json';


data2 = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data2);
    link.setAttribute('download', filename);
    link.click();

  }



  addNew() {
    let dialogRef = this.dialog.open(InventoryNewComponent, {
      height: '800px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addAccessory(result);
      }
    });
  }

  viewDetail(accessory: InventoryModel) {
    console.log(accessory);
    let dialogRef = this.dialog.open(InventoryNewComponent, {
      height: '800px',
      width: '1000px',
      data: {accessory:accessory}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addAccessory(result);
      }
    });
  }

  remove(accessory:InventoryModel){
    this.inventories = this.inventories.filter(x=>x.id != accessory.id)
    this.refreshTable();
  }

  addAccessory(result: InventoryModel) {
    if (!result.id) {
      result.id = this.inventories.length!=0?this.inventories[this.inventories.length - 1].id + 1:1;

      this.inventories.push(result);

    } else {
      this.inventories = this.inventories.map(element => {
        if(element.id == result.id){
          element = {...element,...result};

        }
        return element;
      });
    }
    this.refreshTable();

  }

  resetAccessoryId() {
    let id: number = 1;
    this.inventories.forEach(element => {
      element.id = id;
      id++;
      if(element.engraving1Val < element.engraving2Val){
        let temp:string  = element.engraving1??"";
        let val:number = element.engraving1Val;
        element.engraving1 = element.engraving2;
        element.engraving1Val = element.engraving2Val;
        element.engraving2 = temp;
        element.engraving2Val=val;
      }
    })
  }



  ngAfterViewInit() {
    if (this.sort && this.dataSource) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator && this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any) {

  }



}
