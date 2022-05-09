import React from 'react'

const TodayWeather = ({ location, weather }) => {
  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white'>
      <h1 className='text-2xl font-bold text-center py-8'>
        {location.name} ({location.country})
      </h1>
      <div>
        <img className='w-20 mt-[1rem] bg-white	content-end m-0'
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <h2>
          Temperatura
        </h2>
        <span>Min {weather.temp.min.toFixed(0)}&deg;C</span>
        <span>Max {weather.temp.max.toFixed(0)}&deg;C</span>
      </div>


    </div>
  )
}

export default TodayWeather
