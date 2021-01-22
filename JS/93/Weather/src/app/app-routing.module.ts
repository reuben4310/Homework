import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherPageComponent
  },
 { 
    path: 'info',
    component: InfoComponent
  },
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
   }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
