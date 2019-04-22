import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {WeatherRoutingModule} from './weather.routing.module';
import {WeatherComponent} from './weather.component';
import {WeatherHttpService} from './weather-http-service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        HttpClientModule,
        WeatherRoutingModule,
        SharedModule
    ],
    declarations:[WeatherComponent],
    providers:[WeatherHttpService]
})

export class WeatherModule{
    
}