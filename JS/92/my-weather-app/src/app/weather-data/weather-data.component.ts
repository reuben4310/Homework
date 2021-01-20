import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherInterface,Weather } from '../shared/Weather';
// import { map } from 'rxjs/operators';
const apiKey = 'cb7c71219cf09eb0bb414b932669be97';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  weather!: Weather;
  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // onClick()
    this.httpClient.get<WeatherInterface>(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=08701&units=fahrenheit`)
      .subscribe(weatherData => {
        this.weather={location:weatherData.name,
          temp: weatherData.main.temp, 
          description: weatherData.weather[0].description, 
          img: weatherData.weather[0].icon}
     
      });
  }

}
