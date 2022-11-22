import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather">
      <h1> Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Valeriia Rybakova and is {" "}
        <a href="https://github.com/valeriyarv07/weather-react-5" target="_blank">open-source code on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
