import React, { Component } from "react";
import "./Weather.css";

//Using the lifecycle method of the class system to be able to store weather data and the status of the API call later on.
class Weather extends Component {
  state = {
    lat: "",
    lon: "",
    city: "",
    tempCelcius: "",
    tempFahrenheit: "",
    icon: "",
    description: "",
    country: "",
    errorMessage: ""
  };

  weatherInit = () => {
    const success = position => {
      this.getWeather(position.coords.latitude, position.coords.longitude);
    };

    //Error handling
    const error = () => {
      alert(
        "Unable to retrieve location because you have blocked it - please allow."
      );
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert(
        "Your browser does not support location tracking, or permission is denied."
      );
    }
  };

  //Fetching the API
  getWeather = async (latitude, longitude) => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3f24b2bf14e436852ff873111d6e8a0d&units=metric`
    );
    const data = await api_call.json();
    this.setState({
      lat: latitude,
      lon: longitude,
      city: data.name,
      description: data.weather[0].description,
      tempCelcius: Math.round(data.main.temp),
      tempFahrenheit: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
      country: data.sys.country
    });
  };

  //Initalising weather and weather interval time
  componentDidMount() {
    this.weatherInit();

    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      50000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { city, tempCelcius, icon } = this.state;
    if (city) {
      return (
        <div className="App">
          <div className="weather-box">
            <div className="weather-city">{city}</div>
            <div className="weather-temp">{tempCelcius} &deg;C</div>

            <div>
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather icon"
              />
            </div>
            <div className="playtime">Playtime weather in </div>
          </div>
        </div>
      );
    } else {
      return <div>Please be patient while loading the weather...</div>;
    }
  }
}

export default Weather;
