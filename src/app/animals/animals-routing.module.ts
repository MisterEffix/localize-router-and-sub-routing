import { AnimalsComponent } from './animals.component';
import { LocalizeRouterModule } from 'localize-router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AnimalsComponent,

  children: [{
    path: 'canids',
    loadChildren: './canids/canids.module#CanidsModule'
  }, {
    path: 'cats',
    loadChildren: './cats/cats.module#CatsModule'
  }]
}];

@NgModule({
  imports: [
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  exports: [LocalizeRouterModule, RouterModule]
})
export class AnimalsRoutingModule { }
