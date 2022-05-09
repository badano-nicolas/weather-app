import React from 'react'
import moment from "moment-timezone";

const WeeeklyWeather = ({ weeklyWeather, timezone }) => {


  return (
    <div className='col-start-3 col-end-8'>
      {weeklyWeather.length > 5 &&
        weeklyWeather.slice(1, 6).map((weather) => {
          return (
            <div className="p-6 mx-auto inline-block shadow-x rounded-lg min" key={weather.dt}>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <div className="text-xl font-semibold text-black">{moment.unix(weather.dt).tz(timezone).format("dddd")}</div>
              <h5 class="hidden mt-4 text-xl font-semibold text-black lg:block"></h5>
              <p className="text-slate-500">Min: {weather.temp.min.toFixed(0)}&deg;C</p>
              <p className="text-slate-500">Max: {weather.temp.max.toFixed(0)}&deg;C</p>
            </div>
          );
        })}
    </div>
  )
}
export default WeeeklyWeather
