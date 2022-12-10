import React, { useRef, useEffect, useState } from "react";
import {
  AnimatedWeatherIcon,
  AnimatedWeatherTypes,
  AnimatedWeatherTimes,
} from "animated-weather-icon";

export default function WeatherIcon(props) {
  const iconRef = useRef(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (!iconRef.current) return;
    setIcon(new AnimatedWeatherIcon(iconRef.current));
  }, []);

  const codeMapping = {
    "01d": [AnimatedWeatherTypes.Clear, AnimatedWeatherTimes.Day],
    "01n": [AnimatedWeatherTypes.Clear, AnimatedWeatherTimes.Night],
    "02d": [AnimatedWeatherTypes.BrokenClouds, AnimatedWeatherTimes.Day],
    "02n": [AnimatedWeatherTypes.BrokenClouds, AnimatedWeatherTimes.Night],
    "03d": [AnimatedWeatherTypes.Cloudy, AnimatedWeatherTimes.Day],
    "03n": [AnimatedWeatherTypes.Cloudy, AnimatedWeatherTimes.Night],
    "04d": [AnimatedWeatherTypes.Overcast, AnimatedWeatherTimes.Day],
    "04n": [AnimatedWeatherTypes.Overcast, AnimatedWeatherTimes.Night],
    "09d": [AnimatedWeatherTypes.Rain, AnimatedWeatherTimes.Day],
    "09n": [AnimatedWeatherTypes.Rain, AnimatedWeatherTimes.Night],
    "10d": [AnimatedWeatherTypes.HeavyRain, AnimatedWeatherTimes.Day],
    "10n": [AnimatedWeatherTypes.HeavyRain, AnimatedWeatherTimes.Night],
    "11d": [AnimatedWeatherTypes.ThunderStorm, AnimatedWeatherTimes.Day],
    "11n": [AnimatedWeatherTypes.ThunderStorm, AnimatedWeatherTimes.Night],
    "13d": [AnimatedWeatherTypes.Snow, AnimatedWeatherTimes.Day],
    "13n": [AnimatedWeatherTypes.Snow, AnimatedWeatherTimes.Night],
    "50d": [AnimatedWeatherTypes.Fog, AnimatedWeatherTimes.Day],
    "50n": [AnimatedWeatherTypes.Fog, AnimatedWeatherTimes.Night],
  };

  if (icon) {
    icon.setType(...codeMapping[props.code]);
  }

  return <div ref={iconRef}></div>;
}