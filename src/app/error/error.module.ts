import { NgModule } from '@angular/core';

import { ErrorRoutingModule } from './error.routing.module';

import { ErrorComponent } from './error.component';

@NgModule({
    imports: [
        ErrorRoutingModule,
    ],
    declarations: [
        ErrorComponent
    ],
    exports: [
        ErrorComponent
    ]
  })

export class ErrorModule {
}
