import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfeRoutingModule } from './mfe-routing.module';
import { NgMfeExampleComponent } from './ng-mfe-example/ng-mfe-example.component';


@NgModule({
  declarations: [NgMfeExampleComponent],
  imports: [
    CommonModule,
    MfeRoutingModule
  ]
})
export class MfeModule { }
