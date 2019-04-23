import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()

export class WeatherHttpService {
    
    constructor(
        private http: HttpClient,
    ) { }

    /**
     *@name formWeatherUrl
     * @description used to form dynamic weather api url
     * @param {*} lat
     * @param {*} long
     * @returns url of type string
     * @memberof WeatherHttpService
     */

    formWeatherUrl(lat, long) {
        return `https://api.darksky.net/forecast/00a688a8b9773df7a109658fbb065411/${lat},${long}`;
    }

    /**
     *@name getGeoData
     *@description used for fetching geolocation details
     * @param {string} url
     * @returns
     * @memberof WeatherHttpService
     */

    getGeoData(url: string) {
        return this.http.get(url).pipe(
            map((res: HttpResponse<Response>) => {
                if (res['features']) {
                    let responseData = {
                        latitude: res['features'][0].center[1],
                        longitude: res['features'][0].center[0],
                        location: res['features'][0].place_name
                    }
                    return responseData;
                }
            }),
            catchError((error:HttpErrorResponse) => {
                throw 'error in source. Details: ' + error;
            })
        )
    }
}

