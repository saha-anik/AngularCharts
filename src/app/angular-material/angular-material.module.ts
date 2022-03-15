import { NgModule } from '@angular/core';
import {MatGridListModule } from '@angular/material/grid-list';
const AngularMaterialModules = [
  MatGridListModule
];

@NgModule({
  imports: [
    MatGridListModule
  ],
  exports: [
    MatGridListModule
  ]
})
export class AngularMaterialModule { }
