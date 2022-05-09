import React, { useState } from "react";
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import TodayWeather from "./components/TodayWeather";
import WeeeklyWeather from "./components/WeeeklyWeather";

import useForecast from "./hooks/useForecast";


function App() {
  const { forecast, submitRequest, getWeatherCurrentLocation, currentLocation } = useForecast();


  if (!forecast) {
    //getWeatherCurrentLocation();
  }

  const selectorChanged = value => {
    submitRequest(value);
  };



  return (
    <div>
      {forecast && <Header headerName={currentLocation.name} />}

      {forecast && <TodayWeather location={currentLocation} weather={forecast.daily[0]} />}
      {forecast && <WeeeklyWeather weeklyWeather={forecast.daily} />}

      <CitySelector selectorChanged={selectorChanged} />

    </div>
  );
}

export default App;
