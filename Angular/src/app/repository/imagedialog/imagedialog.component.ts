import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-imagedialog',
    templateUrl: './imagedialog.component.html',
    styleUrls: ['./imagedialog.component.scss']
})
export class ImagedialogComponent implements OnInit {
    localLocation: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ImagedialogComponent>) {
        this.localLocation = environment.LocUrl;
    }
    ngOnInit(): void {
        console.log(this.data);
        if (this.data.indexImg != 0) {
            const saveIndex = this.data.imgArray[0];
            this.data.imgArray[0] = undefined;
            this.data.imgArray[0] = this.data.imgArray[this.data.indexImg];
            this.data.imgArray[this.data.indexImg] = saveIndex;
        }
    }

    closePreview() {
        this.dialogRef.close();
    }

}
