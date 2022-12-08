import { Collapse } from "bootstrap";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponce(response) {
    console.log(response.data);
  }


  let apiKey ="73a00877081bd43422bdee0f3022beb5";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

  axios.get(apiUrl).then(handleResponce);

return (
  <div className="WeatherForecast">
     <div className="row">
      <div className="col">
        <div className="WeatherForecast-day"> Thu </div>
        <WeatherIcon code="01d" size={32}/>
        <div className="WeatherForecast-temperatures"> 
          <span className="WeatherForecast-temperature-max"> 19</span>
          <span className="WeatherForecast-temperature-min"> 10</span>
        </div>
      </div>
     </div>
  </div>
  
);
}