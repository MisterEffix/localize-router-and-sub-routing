import { ObjectsComponent } from './objects/objects.component';
import { AnimalsComponent } from './animals/animals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
      path: 'animals',
      loadChildren: './animals/animals.module#AnimalsModule'
    }, {
      path: 'objects',
      loadChildren: './objects/objects.module#ObjectsModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
