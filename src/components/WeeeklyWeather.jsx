import React from 'react'

const WeeeklyWeather = ({ weeklyWeather }) => {
  return (
    <div className='grid grid-cols-5 gap-4 place-items-start'>
      {weeklyWeather.length > 0 &&
        weeklyWeather.map((weather, index) => {
          if (index == 0 || index > 5) {
            return;
          }

          return (
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4" key={weather.dt}>
              <div className="shrink-0">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">Día</div>
                <p className="text-slate-500">Min: {weather.temp.max.toFixed(0)}&deg;C</p>
                <p className="text-slate-500">Max: {weather.temp.min.toFixed(0)}&deg;C</p>
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default WeeeklyWeather
