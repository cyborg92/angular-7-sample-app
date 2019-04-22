import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren:"./login/login.module#LoginModule"
  },
  {
    path: "home",
    loadChildren:"./home/home.module#HomeModule"
  },
  {
    path: "geolocation",
    loadChildren: "./weather/weather.module#WeatherModule"
  },
  {
    path: "error",
    loadChildren: "./error/error.module#ErrorModule"
  },
  {
    path: "**",
    redirectTo: "/error"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
