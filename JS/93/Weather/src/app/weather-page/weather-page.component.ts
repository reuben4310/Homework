import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Weather} from '../shared/weather';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent {

  weather!: Observable<Weather>;

  constructor(private weatherService: WeatherService) { }

  getWeather(zip: string) {
    this.weather = this.weatherService.getWeather(zip);
  }
}
