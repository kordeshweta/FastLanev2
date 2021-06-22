import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  ElementRef,
  EventEmitter,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { environment } from '../../../environments/environment'
import {RepoServService} from '../../_services/repo-serv.service'

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit, OnChanges {
  @Output() checkboxChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() compData: [];
  @Input() dataType: any;
  @Input() title: any;
  @Input() type: string;
  @Input() searchValue: any;
  @Input() imageUrl: any;
  @Input() idMain: any = 1;
  loading = true;
  selectedPUS=[];
  components: any;
  localLocation:any;
  comp: any;
  rlink: any;
  checkBox: number= 0;
  isAdmin:boolean; // true = admin
  @ViewChildren('triggerCheckBox') checkRef;
  constructor(
    private router: Router,
    private repoServService: RepoServService,
    private appService:AppService
    ) {
    this.localLocation = environment.LocUrl
  }

  ngOnInit(): void {
    this.checkBox = (this.idMain === 1 || this.idMain === 2) ? 0: 1
    this.loading = false;
    this.imageUrl = this.imageUrl;
    this.components = this.compData;
    this.title = this.title;
    this.dataType = this.dataType
    this.appService.isAdmin().subscribe(res=>{
      this.isAdmin=res["status"];
    })

  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.compData && changes.compData.currentValue){
     this.components= changes.compData.currentValue
     this.loading = false;
    }
    if (
      changes.searchValue &&
      changes.searchValue.currentValue &&
      changes.searchValue.previousValue !== changes.searchValue.currentValue
    ) {
      this.comp = this.searchValue;
    }
  }
  getLink(pathtitle) {
    this.rlink = pathtitle;
    this.router.navigate(['/', this.rlink]);
  }
  /*
  tileCheckboxCheck(event, data)
  {
    if(event.checked===true){
      this.selectedPUS.push(data.id)
      console.log(this.selectedPUS)
      this.repoServService.setSelectedRepos(this.selectedPUS)
      this.checkboxChanged.emit(this.selectedPUS)
    }
    else 
    {
      let x = this.selectedPUS.findIndex(i=> {
        return i===data.id
      })
      this.selectedPUS.splice(x,1)
      this.repoServService.setSelectedRepos(this.selectedPUS)
      this.checkboxChanged.emit(this.selectedPUS)
    }
  }*/
  tileCheckboxCheck(event, data)
  {
    console.log(event)
    if(event.checked===true){
      this.selectedPUS.push(data.cName)
      this.repoServService.setSelectedRepos(this.selectedPUS)
      this.checkboxChanged.emit(this.selectedPUS)
    }
    else 
    {
      let x = this.selectedPUS.findIndex(i=> {
        return i===data.cName
      })
      this.selectedPUS.splice(x,1)
      this.repoServService.setSelectedRepos(this.selectedPUS)
      this.checkboxChanged.emit(this.selectedPUS)
    }
    event.stopPropagation()
  }
  navigate(compType, tileId, i, data) {
    if( this.dataType == 1){
      if(tileId === 6){
        this.router.navigate(['/dashboard']); 
      }else {
        console.log(tileId)
        if(tileId==4){
          if(this.isAdmin)
            this.router.navigate(['/renaissance']);
          else
            alert('Coming Soon...')
        }
        if(tileId==5){
          //this.router.navigate(['/estimation'])
          alert('Coming Soon...')
        }
        if(tileId==1){
          this.selectedPUS = ['FED', 'Mobility', 'DI','ECM', 'WCM']
          this.repoServService.setSelectedRepos(this.selectedPUS)
          this.router.navigateByUrl('/repohome')
        }
        if(tileId==2){
        this.router.navigate(['/habitat'])
          //alert('Coming Soon...')
        }
        if(tileId==3){
          this.router.navigateByUrl('/odfd')
        }
        /*this.router.navigate(['/home/sub-portfolio'], {
          queryParams: { tile: tileId,i:tileId},
        });*/
      }
      
    }
    else if (this.dataType===2){
      let checktest = this.checkRef.toArray()[i].checked
      this.checkRef.toArray()[i].checked = !checktest
      if(!checktest){
          this.selectedPUS.push(data.cName)
          this.repoServService.setSelectedRepos(this.selectedPUS)
          this.checkboxChanged.emit(this.selectedPUS)
      }
      else 
      {
        let y = this.selectedPUS.findIndex(i=> {
          return i===data.cName
        })
        this.selectedPUS.splice(y,1)
        this.repoServService.setSelectedRepos(this.selectedPUS)
        this.checkboxChanged.emit(this.selectedPUS)
      }
    }
    else {
      this.router.navigate(['/details'], {
        queryParams: { id: tileId, type: compType },
      });
    }
   
  }
}
