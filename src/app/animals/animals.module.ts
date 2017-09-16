import { TranslateModule } from '@ngx-translate/core';
import { AnimalsComponent } from './animals.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AnimalsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    TranslateModule.forChild(),
  ]
})
export class AnimalsModule { }
