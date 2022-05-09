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

      {forecast &&
        <div className="w-full py-[10rem] px-4">
          <div className="max-w-[1240px] mx-auto gap-8">
            <TodayWeather location={currentLocation} weather={forecast.daily[0]} />
            <WeeeklyWeather weeklyWeather={forecast.daily} />
          </div>
        </div>
      }

      <CitySelector selectorChanged={selectorChanged} />

    </div>
  );
}

export default App;
