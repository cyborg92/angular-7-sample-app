import {Component} from '@angular/core';
import {WeatherHttpService} from './weather-http-service';
@Component({
    selector:'app-weather',
    templateUrl:'../weather/weather.component.html',
    styleUrls:['../weather/weather.component.scss']
})

export class WeatherComponent{
    title:String;
    locationName:String;
    fullLocation:String;
    latitude:String;
    longitude:String;

    constructor(private weatherservice:WeatherHttpService){
        this.title = 'Welcome to the Geolocation Page';
        
    }

    fetchWeather(){
        const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.locationName}.json?access_token=pk.eyJ1IjoicmFjaGl0aGFuZGE5MyIsImEiOiJjanRya2kwd2MwZzBvNGRsOGh1bWVhdGZzIn0.YZ6wok0C_u9DmYOUNGfSzQ&limit=1`;
        
        this.weatherservice.getGeoData(url).subscribe(data=>{
            console.log(data);
            this.latitude=data.latitude;
            this.longitude=data.longitude;
            this.fullLocation=data.location;
        },(error=>{
            console.log(error);
        }));

    }
}