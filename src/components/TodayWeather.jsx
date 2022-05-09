import React from 'react';


const TodayWeather = ({ location, weather, current }) => {
  return (
    <div className='col-start-1 col-end-2 inline-block'>
      <div className="p-6 mx-auto" key={weather.dt}>
        <div className="shrink-0">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
        <div>
          <div className="text-xl font-semibold text-black">{location.name} ({location.country})</div>
          <p className="text-slate-500">Humedad: {current.humidity}%</p>
          <p className="text-slate-500">Temperatura Actual: {current.temp.toFixed(0)}&deg;C</p>
          <p className="text-slate-500">Min: {weather.temp.min.toFixed(0)}&deg;C</p>
          <p className="text-slate-500">Max: {weather.temp.max.toFixed(0)}&deg;C</p>
        </div>
      </div>

    </div>
  )
}

export default TodayWeather
