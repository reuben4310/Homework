export interface WeatherInterface {

  name: string;
  weather: [{ description: string, icon: string }];
  main: { temp: number };

}

export interface Weather {
  location: string;
  temp: number;
  description: string;
  img: string;

}

