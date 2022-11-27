import React from "react";
import FormattedDate from './FormattedDate'

export default function WeatherInfo (props){
return ( 
  <div className="WeatherInfo">                   
    <h1>
      <strong id="desired-city">{props.data.city}</strong>
    </h1>
    <div className="row">
      <div className="col-3 cur-date">
      <FormattedDate date={props.data.date} />
      </div>
      <div className="col-3 cur-temp">
          <span id="current-temperature">{Math.round(props.data.temperature)}</span>
          <span className="units">
              <sup>
              <a href="#" id="celsius-temperature" class="active">°C</a> |
              <a href="#" id="fahrenheit-temperature">°F</a>
              </sup>
          </span>
      </div>
      <div className="col-3 cur-weath">
          <div id="description" className="text-capitalize">{props.data.description}</div>
          <img src={props.data.iconUrl} 
          alt={props.data.description}
          width="80px"
          id="icon"
          className="cur-img"/>
      </div>
      <div className="col-3 cur-air">
          <ul>
              <li>Humidity: <span id="humidity">{props.data.humidity}</span> %</li>
              <li>Wind: <span id="wind">{props.data.wind}</span> m/s</li>
          </ul>
      </div>
    </div> 
  </div>   
  );
}