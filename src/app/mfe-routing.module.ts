import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgMfeExampleComponent } from './ng-mfe-example/ng-mfe-example.component';

const routes: Routes = [{ component: NgMfeExampleComponent, path: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfeRoutingModule { }
