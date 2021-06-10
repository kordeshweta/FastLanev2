import { Component, OnInit } from '@angular/core';
// import { ComponentServicesService } from 'src/app/fastlane/component-services.service';
import { Router } from '@angular/router';
import { SolutionService } from './solution.service';
import { SideNavService } from 'src/app/_services';
import {RepoServService} from '../../_services/repo-serv.service'
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  componentData: any;
  solutions: any;
  loading = true;
  selected= [];
  options = ['FED', 'Mobility', 'DI', 'ECM', 'WCM'];
  currentData: any;
  comp: any;
  list: any;
  searchValue: string;
  solimages = 'assets/images/thumbnails/solutions.png';
  constructor(
    private componentservices: SolutionService,
    private repoServService:RepoServService,
    private router: Router,
    private sideNavService: SideNavService,
  ) {
    this.sideNavService.show()
  }
  searchComponent(search) {
    this.searchValue = search;
  }
  getComponentData(items?) {
    this.componentservices.getComponentData(items?items:[]).subscribe((data) => {
      this.componentData = data;
      this.list = ['components', 'solutions', 'bestPractices'];
      if(this.componentData.status === true){
      this.currentData = this.componentData.solutions;
      }
      this.loading = false;
    });
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
}
