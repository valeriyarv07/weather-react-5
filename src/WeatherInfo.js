import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <WeatherTemperature celsius={props.data.temperature}/>
      </div>
      <div className="col-3 cur-weath">
          <div id="description" className="text-capitalize">{props.data.description}</div>
          <div className="cur-img">
          <WeatherIcon code={props.data.icon}/>
          </div>
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