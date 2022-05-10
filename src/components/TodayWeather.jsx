import React from 'react';

const TodayWeather = ({ location, weather, current }) => {
  return (
    <div className='w-1/4 bg-zinc-200 rounded-xl'>
      <div className="p-5 mx-auto" key={weather.dt}>
        <div className="shrink-0">
          <img className='bg-slate-700 rounded-full'
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
        <div>
          <div className="text-xl font-semibold text-black">{location.name} ({location.country})</div>
          <p className="text-slate-500">Temp: {current.temp.toFixed(0)}&deg;C</p>
          <p className="text-slate-500">Hume: {current.humidity}%</p>

          <p className="text-slate-500">Min: {weather.temp.min.toFixed(0)}&deg;C</p>
          <p className="text-slate-500">Max: {weather.temp.max.toFixed(0)}&deg;C</p>
        </div>
      </div>

    </div>
  )
}

export default TodayWeather
