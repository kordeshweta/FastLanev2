//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components and directives
import {SearchComponentComponent} from './search-component/search-component.component';
import {TileComponent} from './tile/tile.component';

import { SelectCheckAllComponent } from '../shared/custom-material/select-check-all/select-check-all.component';
import { DragDropDirective } from './drag-drop.directive';

//pipes
import { MostPopularPipe } from './pipes/most-popular.pipe';
import { FilterArtifactPipe } from './filter-artifact.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    SearchComponentComponent,
    TileComponent,
    SelectCheckAllComponent,
    MostPopularPipe,
    FilterArtifactPipe,
    DragDropDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponentComponent,TileComponent,SelectCheckAllComponent,MostPopularPipe,FilterArtifactPipe],

})
export class SharedModule {}
