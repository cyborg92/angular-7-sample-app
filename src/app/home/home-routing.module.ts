import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {AuthGuard} from '../core/auth-guard.service';

const routes:Routes=[{
    path:'',
    children: [{
        path: '',
        canActivate:[AuthGuard],
        component: HomeComponent
      }]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HomeRoutingModule{

}