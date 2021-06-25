import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

export interface ClientElement {
  name: string;
  industry: string;
  report: string;
  type: string;
  datecreated: string;
  imgbox: string;
  viewimg: string;
  downloadimg: string;
  deleteimg: string;
  clientimg: string;

}

const ELEMENT_DATA: ClientElement[] = [
  {
    name: 'H', industry: 'ABC', report: 'R', type: 'Type', datecreated: 'June', imgbox: '../../../assets/images/About Assessment/Reports/Rectangle.svg', viewimg: '../../../assets/images/About Assessment/Reports/View.svg',
    downloadimg: '../../../assets/images/About Assessment/Reports/Download.svg', deleteimg: '../../../assets/images/About Assessment/Reports/Delete.svg', clientimg: '../../../assets/images/About Assessment/Reports/ClientIcon.svg'
  },
  {
    name: 'H', industry: 'ABC', report: 'R', type: 'Type', datecreated: 'June', imgbox: '../../../assets/images/About Assessment/Reports/Rectangle.svg', viewimg: '../../../assets/images/About Assessment/Reports/View.svg',
    downloadimg: '../../../assets/images/About Assessment/Reports/Download.svg', deleteimg: '../../../assets/images/About Assessment/Reports/Delete.svg', clientimg: '../../../assets/images/About Assessment/Reports/ClientIcon.svg'
  },
  {
    name: 'L', industry: 'ABC', report: 'R', type: 'Type', datecreated: 'June', imgbox: '../../../assets/images/About Assessment/Reports/Rectangle.svg', viewimg: '../../../assets/images/About Assessment/Reports/View.svg',
    downloadimg: '../../../assets/images/About Assessment/Reports/Download.svg', deleteimg: '../../../assets/images/About Assessment/Reports/Delete.svg', clientimg: '../../../assets/images/About Assessment/Reports/ClientIcon.svg'
  },
  {
    name: ' ', industry: 'ABC', report: 'R', type: 'Type', datecreated: 'June', imgbox: '../../../assets/images/About Assessment/Reports/Rectangle.svg', viewimg: '../../../assets/images/About Assessment/Reports/View.svg',
    downloadimg: '../../../assets/images/About Assessment/Reports/Download.svg', deleteimg: '../../../assets/images/About Assessment/Reports/Delete.svg', clientimg: '../../../assets/images/About Assessment/Reports/ClientIcon.svg'
  },

];

@Component({
  selector: 'app-assessment-report',
  templateUrl: './assessment-report.component.html',
  styleUrls: ['./assessment-report.component.scss']
})
export class AssessmentReportComponent implements OnInit {


  displayedColumns: string[] = ['imgbox', 'clientimg', 'name', 'industry', 'report', 'type', 'datecreated', 'viewimg', 'downloadimg', 'deleteimg'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) {

  }

  redirect() {
    // this.router.navigate();
  }

  ngOnInit(): void {
  }


}
