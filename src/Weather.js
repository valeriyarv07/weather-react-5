import React, {useState} from 'react';
import axios from "axios";
import "./Weather.css"


export default function Weather (){
    const [temperature, setTemperature] = useState (null);
    const [ready, setReady] = useState(false);


    function habdleResponse(response){
        console.log(response.data);
        setTemperature(response.data.main.temp)
    }

if (ready) {
    return (
        <div className="Weather-">
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
                        <strong id="desired-city">POZNAN</strong>
                    </h1>
                    <div className="row">
                        <div className="col-3 cur-date">
                            <ul>
                                <li id="current-date">SUNDAY, JULY 31</li>
                                <li id="current-time">⏰12:00</li>
                            </ul>
                        </div>
                        <div className="col-3 cur-temp">
                            <span id="current-temperature">{temperature}</span>
                            <span className="units">
                                <sup>
                                <a href="#" id="celsius-temperature" class="active">°C</a> |
                                <a href="#" id="fahrenheit-temperature">°F</a>
                                </sup>
                            </span>
                        </div>
                        <div className="col-3 cur-weath">
                            <div id="description">cloudly</div>
                            <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather04-512.png" 
                            alt="cloudly"
                            width="80px"
                            id="icon"
                            className="cur-img"/>
                        </div>
                        <div className="col-3 cur-air">
                            <ul>
                                <li>Humidity: <span id="humidity">71</span> %</li>
                                <li>Wind: <span id="wind">5</span> m/s</li>
                            </ul>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
} else {
    let apiKey ="1bc31ae99edca4b6ba3766063c71acb9";
    let city = "Poznan";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(habdleResponse);

    return "Loading..."
}
}