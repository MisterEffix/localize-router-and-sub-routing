import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectsRoutingModule } from './objects-routing.module';
import { ObjectsComponent } from './objects.component';

@NgModule({
  imports: [
    CommonModule,
    ObjectsRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [ObjectsComponent]
})
export class ObjectsModule { }
