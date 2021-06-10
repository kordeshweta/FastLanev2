import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComponentServicesService } from '../../component-services.service';
import { DataServiceService } from '../../data-service.service';
import { Router, ChildrenOutletContexts } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ExcelService } from './excel.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SideNavService } from 'src/app/_services';
import { MatSort } from '@angular/material/sort';
import { MatTableExporterDirective } from 'mat-table-exporter';
let TABLE_DATA: [];
let editDataFromAdmin: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit{
  componentData: any;
  components: any;
  solutions: any;
  bestPractices: any;
  alldata:any=[];
  loading = true;
  currentData: any;
  list: any;
  itemsPerPageLabel: string;
  sw=false
  // dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private componentservices: ComponentServicesService,
    private dataService: DataServiceService,
    private router: Router,
    public dialog: MatDialog,
    private excelService: ExcelService,
    private sideNavService: SideNavService,
  ) {
    this.sideNavService.show()
  }
  displayedColumns: string[] = [
    'cName',
    'practices',
    'downloadCount',
    'contributors',
    'information',
    'category',
    'technology',
    'updatedAt',
    'actions'

  ];
  dataSource = new MatTableDataSource(TABLE_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      this.dataSource.sort=this.sort;
      setTimeout(() => {
        this.dataSource.sort = this.sort; 
    })
  }
}
  exportExcel() {
    // EXCEL CONFIG
    const xlsConfig = {
      fileName : 'ExportToExcel',
      sheetName : 'Sheet 1',
      header : { style: { fgColor : 'b4caed', bgColor : 'b4caed'} },
      footer : { style: { fgColor : 'CCFFE5'}, text : 'This is system generated excel sheet.' },
      allowGrouping : false,
      groupSettings: {
        columns: [],
        ColumnsHeaderStyle:{ fgColor: ['']}
      },
    }
  // console.log(TABLE_DATA)
   this.excelService.generateExcel(TABLE_DATA, xlsConfig);
}
  openDialog(ele): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {element: ele}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+ result);
      this.getComponentData();
    });
  }

  getComponentData() {
    this.componentservices.getComponentData([]).subscribe((data) => { 
      // console.log(data)
      this.componentData = data;
      this.alldata = [];
      // this.list = Object.keys(this.componentData);
      if(this.componentData[0].status === true){
      this.components = this.componentData[0].components;
      this.alldata = this.alldata.concat(this.components);
      }
      if(this.componentData[1].status === true){
      this.solutions = this.componentData[1].solutions;
      this.alldata = this.alldata.concat(this.solutions);
      }
      if(this.componentData[2].status === true){
      this.bestPractices = this.componentData[2].bestPractices;
      this.alldata = this.alldata.concat(this.bestPractices);
      }
      
      let value = this.alldata.sort();
      TABLE_DATA = value;
      console.log(TABLE_DATA)
      this.dataSource = new MatTableDataSource(TABLE_DATA);
      this.dataSource.paginator = this.paginator;
      setTimeout(() => {
        this.dataSource.sort = this.sort; 
    })
      // this.dataSource.sortingDataAccessor = (item, property) => {
      //   switch (property) {
      //     case 'fromDate': return new Date(item.fromDate);
      //     default: return item[property];
      //   }
      // };
      this.loading = false;
    });
  }
  navigate(compType, tileId) {
    this.router.navigate(['/details'], {
      queryParams: { id: tileId, type: compType },
    });
  }
  ngOnInit(): void {
    this.getComponentData();
  }

  navigateToEdit(ele) {
    editDataFromAdmin=ele
    this.dataService.setTechnologyData(ele); 
    this.router.navigate(['/AddForm'])
  }

  downloadDetails(ele){
    let category=ele["category"]
    if (category[category.length-1]=="s")
          category=category.substring(0,category.length-1)
    let sent_data={id:ele["id"],category:category,name:ele["cName"]}
    // console.log(`%c ${JSON.stringify(ele)}`,`color:yellow;background-color:black;border:2px solid red;font-weight:600;font-size:15px;`)
    const dialofRef=this.dialog.open(DownloadDetailsDialog,{
      width:"1046px",
      height:"516px",
      data:sent_data
    })
  }
  showAllDownloads(){
    // console.log("you are in all repo downloads 😬")
    let sent_data={id:null,category:null}
    const dialofRef=this.dialog.open(DownloadDetailsDialog,{
      width:"1046px",
      height:"516px",
      data:sent_data
    })
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./admin.component.scss'],
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private componentservices:ComponentServicesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    @Output() eventHandle = new EventEmitter<any>();
    onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(ele){
    this.componentservices.deleteItem(ele.id, ele.category)
    .subscribe((data:any) => { 
      if(data.message = "Component deleted successfully!") {
        
      }
    })
    this.dialogRef.close();
  }
}

@Component({
  selector: 'download-details-dialog',
  templateUrl: './download-details-dialog.html'
})
export class DownloadDetailsDialog implements OnInit{
    dataSource;
    count;
    name;
  // dataSource:any[]=[
  //   {email:"abc@gmail.com",purpose:"Project",ddate:"ddmmyyyy",customer:"jon",proj_id:1,remarks:"rem-1"},
  //   {email:"abc1@gmail.com",purpose:"Project",ddate:"ddmmyyyy",customer:"jonny",proj_id:2,remarks:"rem-2"},
  //   {email:"abc2@gmail.com",purpose:"Demo",ddate:"ddmmyyyy",customer:"",proj_id:-1,remarks:"rem-3"},
  //   {email:"abc3@gmail.com",purpose:"Learning",ddate:"ddmmyyyy",customer:"",proj_id:-1,remarks:"rem-4"},
  //   {email:"abc3@gmail.com",purpose:"Learning",ddate:"ddmmyyyy",customer:"",proj_id:-1,remarks:"rem-4"},
  //   {email:"abc3@gmail.com",purpose:"Learning",ddate:"ddmmyyyy",customer:"",proj_id:-1,remarks:"rem-4"},
  //   {email:"abc@gmail.com",purpose:"Project",ddate:"ddmmyyyy",customer:"jon",proj_id:1,remarks:"rem-1"},
  //   {email:"abc1@gmail.com",purpose:"Project",ddate:"ddmmyyyy",customer:"jonny",proj_id:2,remarks:"rem-2"},
  // ]
  displayedColumns: string[] = ['email', 'purpose', 'proj_id', 'customer', 'ddate','remarks'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTableExporterDirective) matTableExporter: MatTableExporterDirective;
  constructor(
    public dialogRef: MatDialogRef<DownloadDetailsDialog>,
    private componentservices:ComponentServicesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit(): void {
    // console.log(JSON.stringify(this.data))
    if(this.data["id"] && this.data["category"])
    {
      this.displayedColumns = ['email', 'purpose', 'proj_id', 'customer', 'ddate','remarks'];
      this.componentservices.getDownloadDetails(this.data["id"],this.data["category"]).subscribe(res=>{
      if(res["status"]==true){
        this.name=this.data["name"]
      // console.log(res)
      this.count=res["data"]["count"]
      let arr=res["data"]["rows"]
      let arr2=[];
      for (let i=0;i<arr.length;i++)
      {
        // console.log(arr[i]["email"])
        let obj={email:arr[i]["email"],purpose:arr[i]["purpose"],ddate:arr[i]["createDate"],customer:
        arr[i]["customerName"],proj_id:arr[i]["projectID"],remarks:arr[i]["remark"]}
        arr2.push(obj)
      }
      this.dataSource = new MatTableDataSource(arr2);
      this.dataSource.paginator = this.paginator;
      // console.log(arr2)
    }
        else{
          console.log("%cServer did not return anything",`color:yellow;background-color:black;border:2px solid red;font-weight:600;font-size:15px;`)
        }
      })
    }
    else{
      this.displayedColumns = ['email', 'skill_set','name','purpose', 'proj_id', 'customer', 'ddate','remarks'];
      this.componentservices.getAllDownloads().subscribe(res=>{
        if(res["status"]==true){
          console.log(res)
          this.count=res["data"].length;
          this.name="All Downloads";
          let arr=res["data"]
          let arr2=[];
          for (let i=0;i<arr.length;i++)
          {
            // console.log(arr[i]["email"])
            let obj={email:arr[i]["email"],skill_set:arr[i]["entity"],cName:arr[i]["cName"],purpose:arr[i]["purpose"],ddate:arr[i]["createDate"],customer:
            arr[i]["customerName"],proj_id:arr[i]["projectID"],remarks:arr[i]["remark"]}
            arr2.push(obj)
          }
          this.dataSource = new MatTableDataSource(arr2);
          this.dataSource.paginator = this.paginator;
          // console.log(arr2)
        }
          else{
            console.log("%cServer did not return anything",`color:yellow;background-color:black;border:2px solid red;font-weight:600;font-size:15px;`)
        }
      })
    }
  }
  importAsXlsx(){

    this.matTableExporter.exportTable('xlsx', {fileName:this.name, sheet: 'sheet 1'});
    
  }
    Close(){
      this.dialogRef.close();
    }
  }
