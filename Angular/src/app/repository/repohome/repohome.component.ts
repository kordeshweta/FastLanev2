import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { RepoServService } from '../../_services/repo-serv.service';
import { ComponentServicesService } from '../component-services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, RequiredValidator, Validators, FormControl } from '@angular/forms';
import { SearchComponentComponent } from 'src/app/shared/search-component/search-component.component';
import { SideNavService } from '../../_services/side-nav.service';
@Component({
    selector: 'app-repohome',
    templateUrl: './repohome.component.html',
    styleUrls: ['./repohome.component.scss']
})
export class RepohomeComponent implements OnInit {

    term: string;
    items: any[] = [{ name: 'archie' }, { name: 'jake' }, { name: 'richard' }];
    componentData: any;
    components: any;
    solutions: any;
    bestPractices: any;
    loading = true;
    imageUrl: any;
    comp: any;
    options = ['FED', 'Mobility', 'DI', 'ECM', 'WCM'];
    selected = [];
    list: any;
    ifComponents = true;
    ifSolutions = true;
    ifBestPractices = true;
    searchValue: string;
    formGroup: FormGroup;
    practiceList = [];
    compimages = 'assets/images/thumbnails/components.png';
    solimages = 'assets/images/thumbnails/solutions.png';
    bestimages = 'assets/images/thumbnails/bestPractices.png';
    @ViewChild(SearchComponentComponent) child: SearchComponentComponent;
    constructor(
        private componentservices: ComponentServicesService,
        private router: Router,
        private repoServService: RepoServService,
        private sideNavService: SideNavService,
        public formBuilder: FormBuilder,
        public cd: ChangeDetectorRef
    ) {
        this.sideNavService.show();
        // console.log(this.loading);
    }
    searchComponent(search) {
        this.searchValue = search;
    }
    getComponentData(items?) {
        this.componentservices.getComponentData(items ? items : []).subscribe((data) => {
            this.componentData = [];
            this.componentData = data;
            this.list = [];
            this.list = ['components', 'solutions', 'bestPractices'];
            if (this.componentData[0].status === true){
                this.components = [];
                this.components = this.componentData[0].components;
                this.cd.detectChanges();
            }
            if (this.componentData[1].status === true){
                this.solutions = [];
                this.solutions = this.componentData[1].solutions;
            }
            if (this.componentData[2].status === true){
                this.bestPractices = [];
                this.bestPractices = this.componentData[2].bestPractices;
            }
            this.loading = false;
            // console.log(this.loading);
        });
    }

    valueOfSelection(item){
        // alert(item)
    }
    onChange($event)
    {
        this.repoServService.setSelectedRepos(this.selected);
        this.getComponentData(this.selected);
    }
    createForm(){
        this.formGroup = this.formBuilder.group({
            practice: []
        });
    }
    ngOnInit(): void {
        const x: any = this.repoServService.selectedRepos;
        if (x.length > 0){

            const allfetch =  x.find(p => p === 'all' || p === 'All');
            if (allfetch === undefined){
                this.selected = x;
                this.getComponentData(this.selected);
            }
            else
            {
                this.selected = this.options;
                this.getComponentData();
            }
        }
        else
        {
            this.practiceList = ['Select All', 'FED', 'Mobility', 'DI', 'ECM', 'WCM'];
            this.getComponentData();
        }
    }
}
