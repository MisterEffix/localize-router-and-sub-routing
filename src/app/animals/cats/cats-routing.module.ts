import { CatsComponent } from './cats.component';
import { LocalizeRouterModule } from 'localize-router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: CatsComponent,
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
export class CatsRoutingModule { }
