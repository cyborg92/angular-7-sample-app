import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: ErrorComponent,
    data: {
    }
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ErrorRoutingModule {
}
