import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestPracticeService } from './best-practice.service';
import { SideNavService } from 'src/app/_services';
import {RepoServService} from '../../_services/repo-serv.service'
@Component({
  selector: 'app-bestpractice',
  templateUrl: './bestpractice.component.html',
  styleUrls: ['./bestpractice.component.scss'],
})
export class BestpracticeComponent implements OnInit {
  componentData: any;
  bestPractices: any;
  loading = true;
  currentData: any;
  selected= [];
  options = ['FED', 'Mobility','DI', 'ECM', 'WCM' ];
  list: any;
  searchValue: string;
  bestimages = 'assets/images/thumbnails/bestPractices.png';
  constructor(
    private componentservices: BestPracticeService,
    private router: Router,
    private repoServService:RepoServService,
    private sideNavService: SideNavService,
  ) {
    this.sideNavService.show()
  }
  onChange($event)
  {
    this.repoServService.setSelectedRepos(this.selected)
    this.getComponentData(this.selected)
  }

  searchComponent(search) {
    this.searchValue = search;
  }
  
  getComponentData(items?) {
    this.componentservices.getComponentData(items?items:[]).subscribe((data) => {
      this.componentData = data;
      this.list = ['components', 'solutions', 'bestPractices'];
      if(this.componentData.status === true){
      this.currentData = this.componentData.bestPractices;
      }
      this.loading = false;
    });
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
