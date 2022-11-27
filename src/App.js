import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather">
      <h1> Weather App</h1>
      <Weather defaultCity="Dnipro" />
      <footer>
        This project was coded by Valeriia Rybakova and is {" "}
        <a href="https://github.com/valeriyarv07/weather-react-5" target="_blank">open-source code on GitHub</a> and <a href="https://astounding-heliotrope-c03484.netlify.app" target="_blank">on Netlify</a>
      </footer>
    </div>
  );
}

export default App;
