import React from "react";
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import Forecast from "./components/Forecast";

import useForecast from "./hooks/useForecast";


function App() {
  const { isError, forecast, submitRequest } = useForecast();


  const selectorChanged = value => {
    submitRequest(value);
  };
  

  console.log(forecast);
  return (
    <div>
      {forecast && <Header headerName={forecast.name}/>}

      {forecast && <Forecast forecastData={forecast}/>}

      <CitySelector selectorChanged={selectorChanged}/>
      
    </div>
  );
}

export default App;
