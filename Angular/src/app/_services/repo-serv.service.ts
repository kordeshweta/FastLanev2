import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoServService {
  selectedRepos= [];
  constructor() {
   }
   setSelectedRepos(data){
     this.selectedRepos = data
   }
   /*getSelectedRepos(){
     return this.selectedRepos
   }*/
}
