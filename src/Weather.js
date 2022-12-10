import React, {useState} from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import axios from "axios";
import "./Weather.css"


export default function Weather (props) {
    const [temperature, setTemperature] = useState (null);
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        console.log(response.data);

        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            time: "12:00",
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon :response.data.weather[0].icon,
            city: response.data.name
        });

    }

    function search(){
        let apiKey ="082d3d02ffdb12f2fd9b259e2ced1d0d";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
//city
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        //search for a city
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    //geoposition
    function geoPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
      
        axios.get(apiUrl).then(handleResponse);
      }
      
      function getCurPosition(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(geoPosition);
      }


if (weatherData.ready) {
    return (
        <div className="Weather">
            <div className="card container-whole-page">
                <div className="card-body">
                    <form id="search-form" onSubmit={handleSubmit}>
                        <div className="row input-group">
                            <div className="col-sm-auto">
                                <input 
                                 type="search"
                                 className="form-control shadow-sm"
                                 placeholder="enter the city"
                                 aria-label="City"
                                 autofocus="on"
                                 id="city-input"
                                 autocomplete="off"
                                 onChange={handleCityChange}
                                />
                            </div>
                            <div class="col-sm-auto">
                            <input 
                            type="submit" 
                            value=" 🔍 search" 
                            className="btn-search shadow-sm"
                            />
                            </div>
                            <div class="col-sm-auto">
                                <button type="button" className="btn-current shadow-sm" onClick={getCurPosition}>
                                📍current
                                </button>
                            </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData} />
                    <WeatherForecast coordinates={weatherData.coordinates}/>
                </div>
            </div>
        </div>
    )
} else {
    search()
    return "Loading..."
}
}