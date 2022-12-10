import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}
  if (unit === "celsius") {

  
    return (
    <div className="WeatherTemperature">
      <span id="current-temperature">{Math.round(props.celsius)}</span>
      <sup>
        <span className="units">°C|<a href="/" id="fahrenheit-temperature" onClick={showFahrenheit}>°F</a></span>
      </sup>
    </div>
    );
} else {
  let fahrenheit = (props.celsius * 9) / 5 +32;
  return (
    <div className="WeatherTemperature">
        <span id="current-temperature">{Math.round(fahrenheit)}</span>
        <sup>
          <span className="units"><a href="/" onClick={showCelsius} id="celsius-temperature">°C</a>|°F</span>
        </sup>
    </div>
  );
}
}