import React from "react";
import { AnimatedWeatherIcon } from 'animated-weather-icon'



export default function WeatherIcon(props) {
  console.log(props.code);

  const icon = new AnimatedWeatherIcon(renderTarget);
  icon.setType(AnimatedWeatherTypes.Clear, AnimatedWeatherTimes.Day);


const codeMapping = {
    "01d": "Clear",
    "01n": "Clear",
    "02d": "BrokenClouds",
    "02n": "BrokenClouds",
    "03d": "Cloudy",
    "03n": "Cloudy",
    "04d": "Overcast",
    "04n": "Overcast",
    "09d": "Rain",
    "09n": "Rain",
    "10d": "HeavyRain",
    "10n": "HeavyRain",
    "11d": "ThunderStorm",
    "11n": "ThunderStorm",
    "13d": "Snow",
    "13n": "Snow",
    "50d": "Fog",
    "50n": "Fog",
};

    return (
      icon.setType(AnimatedWeatherTypes.codeMapping[props.code])
    );

}