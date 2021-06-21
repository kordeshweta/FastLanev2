import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BestpracticeComponent } from './bestpractice.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: BestpracticeComponent,
    },
];

@NgModule({
    declarations: [BestpracticeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        SharedModule,
        MatSelectModule,
        FormsModule
    ],
    exports: [BestpracticeComponent],
})
export class BestpracticeModule {}
