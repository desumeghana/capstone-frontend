import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatInputModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSortModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatOptionModule,
        MatSelectModule
     ],
    exports: [
        MatCheckboxModule,
        MatInputModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSortModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatOptionModule,
        MatSelectModule
    ]
  })
  export class MaterialModule { }