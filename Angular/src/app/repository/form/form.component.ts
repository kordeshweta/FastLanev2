import {
    Component,
    OnInit,
    Inject,
    ElementRef,
    ViewChild,
    Output,
    EventEmitter,
} from '@angular/core';
import { ComponentServicesService } from '../../repository/component-services.service';
import { DataServiceService } from '../../repository/data-service.service';
import {
    FormBuilder,
    FormGroup,
    FormArray,
    FormControl,
    Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { R3TargetBinder } from '@angular/compiler';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/_services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
const URL = `${environment.LocUrl}/api/uploads/image`;
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    urls = [];
    documents = [];
    contributorsInput = [];
    deletableImages = [];
    deletableFiles = [];
    newImages = [];
    documentuploader = false;
    imageuploader = false;
    newFiles = [];
    contributorName: string;
    documentTitle: string;
    enableDocument = false;
    formGroup: FormGroup;
    locLocation: string;
    editId = null;
    selected = 'Components';
    titleAlert = 'This field is required';
    post: any;
    response: string;
    filesUrl: any;
    updateform = false;
    updatefromValidation = true;
    zipFile;
    errorMessages = false;
    loading = false;
    entityType;
    practiceList = [];
    editCompData: any;
    @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;

    constructor(
        private formBuilder: FormBuilder,
        private componentservices: ComponentServicesService,
        public dialog: MatDialog,
        private dataService: DataServiceService,
        private authenticationService: AuthenticationService,
        private httpClient: HttpClient,
        private router: Router
    ) { this.locLocation = environment.LocUrl; }
    onChangeFile(event) {
        this.zipFile.push(event.target.files[0]);
        if (this.zipFile.length > 1) {
            alert('You can upload max 1 zip file');
            return;
        }
    }
    ngOnDestroy() {
        this.dataService.resetDeletableImages();
        this.dataService.setTechnologyData([]);
    }

    regexString(str) {
        const regex = /(! |<([^>]+)>)/ig;
        const filterData = str.replace(regex, '');
        return filterData;
    }
    cancelChanges(e) {
        e.preventDefault();
        this.resetAllData();
        this.editForm(this.editCompData);
    }
    ngOnInit(): void {
        this.createForm();
        this.practiceList = ['FED', 'Mobility', 'DI', 'ECM', 'WCM'];
        this.dataService.data.subscribe((data: any) => {
            this.editCompData = data;
            console.log(this.editCompData);
        });
        if (Object.keys(this.editCompData).length !== 0 && this.editCompData.constructor === Object) {
            this.editForm(this.editCompData);
            this.updateform = true;
            this.editId = this.editCompData.id;
        }
        // this.onChanges();
    }
    /* onChanges(){
    this.formBuilder.valueChanges.subscribe(val => {
    })
  }*/
    openDialog(ele, type): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '350px',
            data: { element: ele, type }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (ele.remove) {
                const index = this.urls.findIndex(p => p.id === ele.id);
                this.formGroup.markAsDirty();
                this.urls.splice(index, 1);
            }
        });
    }
    openFileDialog(ele, type): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '350px',
            data: { element: ele, type }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (ele.remove) {
                const index = this.documents.findIndex(p => p.id === ele.id);
                this.formGroup.markAsDirty();
                this.documents.splice(index, 1);
            }
        });
    }
    editForm(editdata) {
        this.formGroup.patchValue({
            cName: editdata.cName,
            category: editdata.category,
            longDesc: editdata.longDesc,
            shortDesc: editdata.shortDesc,
            technology: editdata.technology,
            practices: editdata.practices,
        });
        this.contributorsInput = editdata.contributors;
        this.selected = editdata.category;
        this.editCompData.images.forEach(p => {
            this.urls.push({ uuid: this.genrateUUIDv4(), name: p.fileName, path: p.fileURL, id: p.id });
        });
        this.editCompData.files.forEach(p => {
            this.documents.push({ linkText: p.linkText, id: p.id, downloadable: { name: p.fileName } });
        });
    }
    EnableUploadFiles(event) {
        if (event.target.value.length > 0) {
            this.enableDocument = true;
        } else {
            this.enableDocument = false;
        }
        this.documentTitle = event.target.value;
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            category: this.selected,
            cName: [null, Validators.required],
            // id: +new Date(),
            shortDesc: [
                null,
                [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(200),
                ],
            ],
            longDesc: [
                null,
                [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(500),
                ],
            ],
            images: [],
            Files: [],
            technology: [null, Validators.required],
            lastUpdatedOn: moment(new Date()).format('DD MMMM YYYY'),
            contributors: [null],
            practices: [null, Validators.required],
        });
    }

    get technology() {
        return this.formGroup.get('technology') as FormControl;
    }
    get cName() {
        return this.formGroup.get('cName') as FormControl;
    }

    InputContributors(event) {
        event.preventDefault();
        this.contributorName = event.target.value;
    }
    updateContributor(event, ContributorTitleInput: HTMLInputElement) {
        event.preventDefault();
        if (this.contributorName !== '') {
            this.contributorsInput.push(this.contributorName);
            this.formGroup.markAsDirty();
            this.contributorName = '';
            ContributorTitleInput.value = '';
            ContributorTitleInput.focus();
        }
    }
    // Upload Document
    uploadDocumentFiles(event, documentTitleInput: HTMLInputElement) {
        for (let index = 0; index < event.length; index++) {
            const element = event[index];
            element.uuid = this.genrateUUIDv4();
            this.documents.push({
                linkText: this.documentTitle,
                downloadable: element,
            });
            if (this.updateform) {
                this.newFiles.push({
                    linkText: this.documentTitle,
                    downloadable: element,
                });
                this.formGroup.markAsDirty();
            }
            documentTitleInput.value = '';
            this.documentTitle = '';
            this.enableDocument = false;
        }
    }

    // upload part

    uploadFile(event) {
        if (event.length > 0) {
            if (event.length > 5) {
                alert('You can only upload a maximum of 5 files');
            } else {
                for (let index = 0; index < event.length; index++) {
                    const element = event[index];
                    console.log(element);
                    element.uuid = this.genrateUUIDv4();
                    this.urls.push(element);
                    if (this.updateform) {
                        this.formGroup.markAsDirty();
                        this.newImages.push(element);
                    }
                }
            }
        }
    }

    public genrateUUIDv4() {
        const f = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        return f.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    deleteImages(index, image, e) {
        this.imageuploader = !this.imageuploader;
        e.preventDefault();
        if (image.id) {
            this.openDialog(image, 'image');
        }
        else {
            this.urls.splice(index, 1);
        }
        /* this.urls.splice(index, 1);*/
    }
    deleteContributors(index) {
        this.contributorsInput.splice(index, 1);
        this.formGroup.markAsDirty();
    }
    deleteDocuments(index, file, e) {
        this.documentuploader = !this.documentuploader;
        e.preventDefault();
        if (file.id) {
            this.openFileDialog(file, 'file');
        }
        else {
            this.documents.splice(index, 1);
        }
        /* this.documents.splice(index, 1)*/
    }
    goToPreviousPage() {
        this.router.navigate(['/Admin']);
    }
    resetFormData() {
        if (this.urls.length <= 0 && this.documents.length <= 0) {
            this.errorMessages = true;
            this.formGroup.reset();
            window.scrollTo(0, 0);
            this.contributorsInput = [];
            this.loading = false;
            setTimeout(() => {
                this.errorMessages = false;
            }, 5000);
        }
    }
    resetTest() {
        this.errorMessages = true;
        this.formGroup.reset();
        window.scrollTo(0, 0);
        this.contributorsInput = [];
        this.loading = false;
        this.urls = [];
        this.documents = [];
        this.updateform = false;
        setTimeout(() => {
            this.errorMessages = false;
        }, 5000);
    }
    resetAllData() {
        this.dataService.resetDeletableImages();
        this.formGroup.reset();
        this.urls = [];
        this.documents = [];
        this.newFiles = [];
        this.newImages = [];
        this.contributorsInput = [];
        window.scrollTo(0, 0);
    }

    onSubmit(e, post) {
        e.preventDefault();
        if (this.urls) {
            if (this.urls.length > 5) {
                alert('You can upload max 5 images');
                return;
            }
        }
        if (this.zipFile) {
            if (this.zipFile.length > 5) {
                alert('You can upload max 5 zip file');
                return;
            }
        }
        post.shortDesc = post.shortDesc.slice(0, 200);
        post.longDesc = post.longDesc.slice(0, 500);
        post.cName = post.cName.slice(0, 100);
        post.technology = post.technology.slice(0, 50);
        post.images = this.urls;
        post.Files = this.documents;
        this.filesUrl = this.documents;
        post.contributors = this.contributorsInput;
        // post.contributors = this.contributorsArray;
        post.cName = this.regexString(post.cName);
        post.longDesc = this.regexString(post.longDesc);
        post.shortDesc = this.regexString(post.shortDesc);
        post.technology = this.regexString(post.technology);

        const arr = [];
        for (let i = 0; i < post.contributors.length; i++) {
            arr.push(this.regexString(post.contributors[i]));
        }
        post.contributors = arr;

        const myObjStr = JSON.stringify(post);
        this.post = myObjStr;

        // alert(JSON.parse(this.post).category);
        const cat = JSON.parse(this.post);
        if (cat.category === 'components') {
            this.entityType = 'component';
        }
        if (cat.category === 'solutions') {
            this.entityType = 'solution';
        }
        if (cat.category === 'bestPractices') {
            this.entityType = 'bestPractice';
        }
        if (!this.updateform) {
            this.componentservices.postFormData(this.post, this.entityType + 's/add').subscribe((x: any) => {
                console.log(x);
                this.loading = true;
                for (let i = 0; i <= this.urls.length - 1; i++) {
                    const uuid = this.urls[i].uuid;
                    const fileData = {
                        image: this.urls[i],
                        entity: this.entityType,
                        entityId: x[this.entityType].id,
                        type: 'image'
                    };
                    this.componentservices.uploadFile(fileData).subscribe(
                        (data: any) => {
                            console.log(data);
                            this.urls = this.urls.filter(url => url.uuid !== uuid);
                            this.resetFormData();
                        },
                        (error) => {
                            console.log(error);
                            this.urls = this.urls.filter(url => url.uuid !== uuid);
                            this.resetFormData();
                        },
                    );
                }

                for (let i = 0; i <= this.documents.length - 1; i++) {
                    const uuid = this.documents[i].uuid;
                    const fileData = {
                        file: this.documents[i].downloadable,
                        entity: this.entityType,
                        entityId: x[this.entityType].id,
                        type: 'file',
                        linkText: this.documents[i].linkText
                    };
                    this.componentservices.uploadFile(fileData).subscribe(
                        (data: any) => {
                            console.log(data);
                            this.documents = this.documents.filter(doc => doc.uuid !== uuid);
                            this.resetFormData();
                        },
                        (error) => {
                            console.log(error);
                            this.documents = this.documents.filter(doc => doc.uuid !== uuid);
                            this.resetFormData();
                        },
                    );
                }
                console.log(this.post);
                console.log(post);
                this.loading = false;
            }, (err) => {
                console.error(err);
                this.loading = false;
            }
            );
        }
        else {
            this.componentservices.editItem(this.editId, this.entityType + 's', this.post)
                .subscribe((x: any) => {
                    this.loading = true;
                    for (let i = 0; i <= this.newImages.length - 1; i++) {
                        const uuid = this.newImages[i].uuid;
                        const fileData = {
                            image: this.newImages[i],
                            entity: this.entityType,
                            entityId: this.editId,
                            type: 'image'
                        };
                        this.componentservices.uploadFile(fileData).subscribe(
                            (data: any) => {
                                console.log(data);
                                this.newImages = this.newImages.filter(url => url.uuid !== uuid);
                                this.resetTest();
                            },
                            (error) => {
                                console.log(error);
                                this.newImages = this.newImages.filter(url => url.uuid !== uuid);
                                this.resetTest();
                            },
                        );
                    }

                    for (let i = 0; i <= this.newFiles.length - 1; i++) {
                        const uuid = this.newFiles[i].uuid;
                        const fileData = {
                            file: this.newFiles[i].downloadable,
                            entity: this.entityType,
                            entityId: this.editId,
                            type: 'file',
                            linkText: this.newFiles[i].linkText
                        };
                        this.componentservices.uploadFile(fileData).subscribe(
                            (data: any) => {
                                console.log(data);
                                this.newFiles = this.newFiles.filter(doc => doc.uuid !== uuid);
                                this.resetTest();
                            },
                            (error) => {
                                console.log(error);
                                this.newFiles = this.newFiles.filter(doc => doc.uuid !== uuid);
                                this.resetTest();
                            },
                        );
                    }
                    // remove images
                    this.deletableImages = this.dataService.deletableImages;
                    if (this.deletableImages.length > 0) {
                        this.deletableImages.forEach(p => {
                            this.componentservices.deleteImages(p, 'delete/image').subscribe(
                                (data: any) => {
                                    console.log(data);
                                    this.resetTest();
                                },
                                (error) => {
                                    console.log(error);
                                },
                            );
                        });
                    }
                    // remove files
                    this.deletableFiles = this.dataService.deletableFiles;
                    if (this.deletableFiles.length > 0) {
                        this.deletableFiles.forEach(p => {
                            this.componentservices.deleteFiles(p, 'delete/file').subscribe(
                                (data: any) => {
                                    console.log(data);
                                    this.resetTest();
                                },
                                (error) => {
                                    console.log(error);
                                },
                            );
                        });
                    }
                    if (this.newFiles.length <= 0 && this.newImages.length <= 0) {
                        this.resetTest();
                    }
                    console.log(this.post);
                    console.log(post);
                    this.loading = false;
                },
                (err) => {
                    console.error(err);
                    this.loading = false;
                });
        }
    }
}
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog-overview-example-dialog.html',
    // styleUrls: ['./admin.component.scss'],
})
export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        private componentservices: ComponentServicesService,
        private dataService: DataServiceService,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    @Output() eventHandle = new EventEmitter<any>();
    onNoClick(): void {
        this.dialogRef.close();
    }

    onOkClick(ele, type) {
        ele.remove = true;
        if (type === 'image') {
            this.dataService.setDeletableImages(ele.id);
            console.log('images', this.dataService.deletableImages);
        }
        else {
            this.dataService.setDeletableFiles(ele.id);
            console.log('files', this.dataService.deletableFiles);
        }
        this.dialogRef.close();
    }
}
