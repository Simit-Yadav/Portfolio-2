import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

const material = [
  CommonModule,
  MatMenuModule,
  MatDialogModule,
  MatButtonModule,
  CdkAccordionModule,
  MatIconModule,
  MatChipsModule
]

@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class AngularMaterialModule { }
