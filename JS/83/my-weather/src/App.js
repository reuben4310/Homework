import './WeatherDetails.css';
import './App.css';
import React, { Component } from 'react';
import Details from './WeatherDetails';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getWeatherInfo(e) {
    const units = 'imperial';
    const zipInput = e.target.value;

    // USE YOUR OWN API KEY - REGISTER AT https://home.openweathermap.org/users/sign_up
    const apiKey = 'e41b9bd72d888b5f53280897fbe53b23';

    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zipInput}&units=${units}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(weatherData => {
        console.log(weatherData);
        this.setState({
          weather: {
            name: weatherData.name,
            imgSrc: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
            description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`
          }
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({ error: "Not found" });
        alert("Not found");
      });
  }
  render() {

    const myWeather = this.state.weather ? <Details weather={this.state.weather} /> : "";


    return (
      <>
        <header>Please enter a zip code below</header>
        <br></br>
        <div className="container">
          <input type="number" onBlur={this.getWeatherInfo.bind(this)} />
          {myWeather}

        </div>
      </>
    );
  }
}