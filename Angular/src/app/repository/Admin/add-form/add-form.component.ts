import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/_services';
@Component({
    selector: 'app-add-form',
    templateUrl: './add-form.component.html',
    styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

    constructor(private sideNavService: SideNavService, ) {
        this.sideNavService.show();
    }

    ngOnInit(): void {
    }

}
