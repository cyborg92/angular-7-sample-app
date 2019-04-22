import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import {SharedModule} from '..//shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        FormsModule,
        LoginRoutingModule,
        // SharedModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule {

}