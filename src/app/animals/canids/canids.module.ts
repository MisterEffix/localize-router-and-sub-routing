import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanidsRoutingModule } from './canids-routing.module';
import { CanidsComponent } from './canids.component';

@NgModule({
  imports: [
    CommonModule,
    CanidsRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [CanidsComponent]
})
export class CanidsModule { }
