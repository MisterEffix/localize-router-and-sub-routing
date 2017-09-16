import { LocalizeRouterModule } from 'localize-router';
import { CanidsComponent } from './canids.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: CanidsComponent,
}];

@NgModule({
  imports: [
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  exports: [
    LocalizeRouterModule,
    RouterModule
  ]
})
export class CanidsRoutingModule { }
