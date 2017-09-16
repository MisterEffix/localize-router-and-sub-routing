import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';

@NgModule({
  imports: [
    CommonModule,
    CatsRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [CatsComponent]
})
export class CatsModule { }
