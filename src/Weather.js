import React, {useState} from 'react';
import axios from "axios";
import "./Weather.css"


export default function Weather (props) {
    const [temperature, setTemperature] = useState (null);
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ready:false});

    function habdleResponse(response){
        console.log(response.data);

        setWeatherData({
            ready: true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date: "SUNDAY, JULY 31",
            time: "12:00",
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            iconUrl: response.data.weather[0].icon,
            city: response.data.name
        });

    }

if (weatherData.ready) {
    return (
        <div className="Weather">
            <div className="card container-whole-page">
                <div className="card-body">
                    <form id="search-form">
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
                                <button type="button" className="btn-current shadow-sm">
                                current
                                </button>
                            </div>
                        </div>
                    </form>
                    <h1>
                        <strong id="desired-city">{weatherData.city}</strong>
                    </h1>
                    <div className="row">
                        <div className="col-3 cur-date">
                            <ul>
                                <li id="current-date">{weatherData.date}</li>
                                <li id="current-time">⏰{weatherData.time}</li>
                            </ul>
                        </div>
                        <div className="col-3 cur-temp">
                            <span id="current-temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="units">
                                <sup>
                                <a href="#" id="celsius-temperature" class="active">°C</a> |
                                <a href="#" id="fahrenheit-temperature">°F</a>
                                </sup>
                            </span>
                        </div>
                        <div className="col-3 cur-weath">
                            <div id="description" className="text-capitalize">{weatherData.description}</div>
                            <img src={weatherData.iconUrl} 
                            alt={weatherData.description}
                            width="80px"
                            id="icon"
                            className="cur-img"/>
                        </div>
                        <div className="col-3 cur-air">
                            <ul>
                                <li>Humidity: <span id="humidity">{weatherData.humidity}</span> %</li>
                                <li>Wind: <span id="wind">{weatherData.wind}</span> m/s</li>
                            </ul>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
} else {
    let apiKey ="73a00877081bd43422bdee0f3022beb5";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(habdleResponse);

    return "Loading..."
}
}