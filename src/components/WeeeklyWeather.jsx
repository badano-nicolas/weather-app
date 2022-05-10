import React from 'react'
import moment from "moment-timezone";

const WeeeklyWeather = ({ weeklyWeather, timezone }) => {

  const translateDay = (day) => {
    switch (day) {
      case 'Monday':
        return 'Lun';
      case 'Tuesday':
        return 'Mar';
      case 'Wednesday':
        return 'Mie';
      case 'Thursday':
        return 'Jue';
      case 'Friday':
        return 'Vie';
      case 'Saturday':
        return 'Sab';
      case 'Sunday':
        return 'Dom';
      default:
        return day;
    }
  }
  return (
    <div className="rounded-lg flex items-stretch m-0 w-full ">
      {weeklyWeather.length > 5 &&
        weeklyWeather.slice(1, 6).map((weather) => {
          return (
            <div className="p-5 mx-auto inline-block" key={weather.dt}>
              <div >
                <img className='bg-slate-300  rounded-full'
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <div className="text-xl font-semibold text-black text-center">{translateDay(moment.unix(weather.dt).tz(timezone).format("dddd"))}</div>
              <div className='text-center'>
                <p className="text-slate-500">Min: {weather.temp.min.toFixed(0)}&deg;C</p>
                <p className="text-slate-500">Max: {weather.temp.max.toFixed(0)}&deg;C</p>
              </div>
            </div>
          );
        })}
    </div>
  )
}
export default WeeeklyWeather
