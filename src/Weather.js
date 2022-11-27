import React, {useState} from 'react';
import WeatherInfo from './WeatherInfo';
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
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            time: "12:00",
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            city: response.data.name
        });

    }

    function search(){
        let apiKey ="73a00877081bd43422bdee0f3022beb5";
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
                                <button type="button" className="btn-current shadow-sm">
                                current
                                </button>
                            </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData} />
                </div>
            </div>
        </div>
    )
} else {
    search()
    return "Loading..."
}
}