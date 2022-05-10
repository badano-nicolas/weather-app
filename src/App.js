import React, { useEffect } from "react";
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import TodayWeather from "./components/TodayWeather";
import WeeeklyWeather from "./components/WeeeklyWeather";

import useForecast from "./hooks/useForecast";

function App() {
  const { forecast, submitRequest, getWeatherCurrentLocation, currentLocation } = useForecast();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        getWeatherCurrentLocation(position)
      }
    })

  }, [getWeatherCurrentLocation])

  const selectorChanged = value => {
    submitRequest(value);
  };

  return (
    <div>
      <Header />

      {forecast &&
        <div className="w-full px-4 py-8 e-block">
          <div className="max-w-[1200px] mx-auto bg-white rounded-xl flex">
            <TodayWeather location={currentLocation} weather={forecast.daily[0]} current={forecast.current} />
            <WeeeklyWeather weeklyWeather={forecast.daily} timezone={forecast.timezone} />
          </div>
        </div>
      }

      <CitySelector selectorChanged={selectorChanged} />

    </div>
  );
}

export default App;