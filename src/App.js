import React, { useEffect } from "react";
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import TodayWeather from "./components/TodayWeather";
import WeeeklyWeather from "./components/WeeeklyWeather";

import useForecast from "./hooks/useForecast";

function App() {
  const { forecast, submitRequest, getWeatherCurrentLocation, currentLocation } = useForecast();

  useEffect(() => {
    console.log("use effect");
    getWeatherCurrentLocation();
  }, [])



  const selectorChanged = value => {
    submitRequest(value);
  };

  return (
    <div>
      {forecast && <Header headerName={currentLocation.name} />}

      {forecast &&
        <div className="w-full px-4 py-8">
          <div className="max-w-[1200px] mx-auto gap-8 bg-white rounded-xl flex items-center h-72">
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