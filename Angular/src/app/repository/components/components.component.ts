import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from './components.service';
import {RepoServService} from '../../_services/repo-serv.service'
import { SideNavService } from 'src/app/_services';

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  componentData: any;
  components: any;
  loading = true;
  selected = [];
  options = ['FED', 'Mobility','DI', 'ECM', 'WCM' ];
  comp: any;
  currentData: any;
  searchValue: string;
  list: any;
  compimages = 'assets/images/thumbnails/components.png';
  constructor(
    private componentservices: ComponentsService,
    private sideNavService: SideNavService,
    private repoServService: RepoServService,
    private router: Router
  ) {
    this.sideNavService.show()
  }
  searchComponent(search) {
    this.searchValue = search;
  }
  onChange($event)
  {
    this.repoServService.setSelectedRepos(this.selected)
    this.getComponentData(this.selected)
  }
  ngOnInit(): void {
    let x:any = this.repoServService.selectedRepos
    if(x.length>0){
      let allfetch =  x.find(p=> {
        return p==='all'||p==="All"
      })
      if(allfetch===undefined){
        this.selected= x
        this.getComponentData(this.selected)
      }
      else 
      {
        this.selected=this.options
        this.getComponentData()
      }
    }
    else 
    {
    this.getComponentData();
    }
  }
  getComponentData(items?) {
    this.componentservices.getComponentData(items?items:[]).subscribe((data) => {
      this.componentData = data;
      this.list = ['components', 'solutions', 'bestPractices'];
      if(this.componentData.status === true){
      this.currentData = this.componentData.components;
      }
      this.loading = false;
    });
  }

}
