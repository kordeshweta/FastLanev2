import { Component, Inject, OnInit } from '@angular/core';
import { ComponentServicesService } from '../component-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagedialogComponent } from '../imagedialog/imagedialog.component';
import { environment } from '../../../environments/environment';
import { GetDescriptionDetailsPageService } from './get-description-details-page.service';
import { saveAs as importedSaveAs } from 'file-saver';
import 'rxjs';
import { SideNavService } from 'src/app/_services/side-nav.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    componentData: any;
    details: any;
    tileId: any;
    detailobject: any;
    selectedImgPath: string;
    selectedImgIndex: number;
    compType: any;
    localLocation: any;
    imgIndex: any;
    selectedImgArray = [];

    constructor(
        private componentservices: ComponentServicesService,
        private getdescribeDetailsPage: GetDescriptionDetailsPageService,
        private activatedRoute: ActivatedRoute,
        private sideNavService: SideNavService,
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer,
        private location: Location,
        public dialog: MatDialog,
        private router: Router
    ) {
        // console.log(this.detailobject)
        this.sideNavService.show();
        this.localLocation = environment.LocUrl;
        iconRegistry.addSvgIcon(
            'arrow-back',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/arrow_back.svg')
        ),
        iconRegistry.addSvgIcon(
            'close',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/close.svg')
        );
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.tileId = params.id;
            this.compType = params.type;
        });

        this.getDescriptionFullDetailsPage(this.tileId, this.compType);
    }
    downloadDialog(id, cname: string, category: string){
        const dialogRef = this.dialog.open(DownloadDialog, {
            width: '562px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(res => {
            // console.log(`%c Download from ${id} with name ${cname} for purposes of ${ JSON.stringify(res?.data)}`,
            // `background: white;
            // border: 3px solid red;
            // color: red;
            // font-size: 50px;
            // margin: 40px;
            // padding: 20px;`)
            if (res?.data != true){
                if (category[category.length - 1] == 's')
                {category = category.substring(0, category.length - 1); }
                const payload = {purpose: res.purpose, project: res?.data.proj_id, customer: res?.data.customer_name, remark: res?.data.remarks};
                // console.log(payload)
                this.getDownloadFiles(id, cname, category, payload);
            }
        });


    }
    getDownloadFiles(fileId, fileName, category, payload) {
        this.getdescribeDetailsPage.getDownloadFiles(category.toLowerCase(), fileId, payload).subscribe((blob) => {
            importedSaveAs(blob, fileName);
        });
        this.getDescriptionFullDetailsPage(this.tileId, this.compType);
    }

    getDescriptionFullDetailsPage(tileId, compType) {
        const details = {
            compType,
            Id: +tileId,
        };
        this.getdescribeDetailsPage
            .getDescriptionFullDetailsPage(details)
            .subscribe((data: any) => {
                if (data.status === true && data.component){
                    this.componentData = data.component;
                } else if (data.status === true && data.solution){
                    this.componentData = data.solution;
                } else if (data.status === true && data.bestPractice){
                    this.componentData = data.bestPractice;
                }
                this.detailobject = this.componentData;
                // console.log("detailobject",this.detailobject);
                if (this.detailobject && this.detailobject.images.length > 0) {
                    this.selectedImgPath = this.localLocation + this.detailobject.images[0].fileURL;
                    this.selectedImgArray = this.detailobject.images;
                    this.selectedImgIndex = 0;
                }
            });
    }
    chooseImg(index) {
        this.selectedImgPath = this.localLocation + this.detailobject.images[index].fileURL;
        this.imgIndex = this.detailobject.images[index].fileURL;
        this.selectedImgIndex = index;
    }

    goToPreviousPage() {
        this.location.back();
    }

    openPreviewImgDialog(x, y) {
        if (x === 'image') {
            this.dialog.open(ImagedialogComponent, {
                data: {
                    img: this.selectedImgPath,
                    video: y,
                    type: x,
                    imgArray: this.selectedImgArray,
                    indexImg: this.selectedImgIndex,
                },
                width: '100%',
                height: 'auto',
                maxWidth: '90vw',
            });
        } else {
            this.dialog.open(ImagedialogComponent, {
                data: {
                    img: this.selectedImgPath,
                    video: y,
                    type: x,
                    imgArray: this.selectedImgArray,
                    indexImg: this.selectedImgIndex,
                },
                width: '100%',
                height: 'auto',
                maxWidth: '50vw',
                maxHeight: '50vw',
            });
        }
    }
}

@Component({
    selector: 'download-dialog',
    templateUrl: 'download-dialog.html'
})
export class DownloadDialog implements OnInit {
    dropdown: string[] = ['Project', 'Learning', 'Demo'];
    drp: string;
    constructor(public dialogRef: MatDialogRef<DownloadDialog>,
                @Inject(MAT_DIALOG_DATA) public data){
        this.drp = '';
    }
    form: FormGroup = new FormGroup({
        customer_name: new FormControl('', Validators.required),
        proj_id: new FormControl('', Validators.required),
        remarks: new FormControl('')
    });
    form1: FormGroup = new FormGroup({
        remarks: new FormControl(''),
    });
    onChange(val: string){
        console.log(val);
    }
    onSubmit(){
        // console.log("form submitted!")
        let form_data: any = '';
        if (this.drp == 'Project')
        {
        // console.log(this.form.value)
            form_data = this.form.value;
        }
        else{
        // console.log(this.form1.value)
            form_data = this.form1.value;
        }
        this.dialogRef.close({data: form_data, purpose: this.drp});
    }
    Close(){
        this.dialogRef.close({data: true});
    }
    ngOnInit(){

    }
}
