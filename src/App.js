import React from "react";
import Header from "./components/Header";
import DefaultPlaces from "./components/DefaultPlaces";
import TodayWeather from "./components/TodayWeather";
import WeeeklyWeather from "./components/WeeeklyWeather";

function App() {
  return (
    <div>
      <Header/>
      <DefaultPlaces/>
      <TodayWeather/>
      <WeeeklyWeather/>
    </div>
  );
}

export default App;
