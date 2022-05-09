import React from "react";
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import TodayWeather from "./components/TodayWeather";
import WeeeklyWeather from "./components/WeeeklyWeather";

import useForecast from "./hooks/useForecast";


function App() {
  const { isError, forecast, submitRequest } = useForecast();


  const selectorChanged = value => {
    submitRequest(value);
  };

  return (
    <div>
      <Header />
      <TodayWeather />
      <TodayWeather />
      <CitySelector selectorChanged={selectorChanged}/>
      
 
      <WeeeklyWeather />
    </div>
  );
}

export default App;
