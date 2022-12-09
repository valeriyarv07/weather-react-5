import { Collapse } from "bootstrap";
import React, {useEffect, useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded,setLoaded] = useState(false);
  let [forecast,setForecast] = useState(null);

  useEffect(() => {
  setLoaded(false);
  }, [props.coordinates])



  function handleResponce(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load () {
    let apiKey ="082d3d02ffdb12f2fd9b259e2ced1d0d";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
  
    axios.get(apiUrl).then(handleResponce);
  }

if (loaded) {
  return (
    <div className="WeatherForecast">
       <div className="row">
        {forecast.map(function(dailyForecast, index) {
          if (index <6 ) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
              </div>
            );
          } else {
            return null;
          }
        })}
       </div>
    </div>
  );
} else {
load();

  return null;
}

}