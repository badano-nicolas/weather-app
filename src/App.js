import React from "react";
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import TodayWeather from "./components/TodayWeather";
import WeeeklyWeather from "./components/WeeeklyWeather";

function App() {
  return (
    <div>
      <Header />
      <CitySelector />
      <TodayWeather />
      <WeeeklyWeather />
    </div>
  );
}

export default App;
