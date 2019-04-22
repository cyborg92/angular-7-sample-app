import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';


@NgModule({
    imports:[RouterModule],
    declarations:[HeaderComponent],
    exports:[HeaderComponent]
})
export class SharedModule{
}