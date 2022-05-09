import React from 'react'

const TodayWeather = ({ location, weather }) => {
  return (

    <div>
      <h1>
        {location.name} ({location.country})
      </h1>
      <h2>
        <span>Temperatura máxima {weather.temp.min.toFixed(0)}&deg;C</span>
      </h2>
      <h2>
        <span>Temperatura máxima {weather.temp.max.toFixed(0)}&deg;C</span>
      </h2>
      <h2>
        <span>{weather.weather.description} </span>
      </h2>
    </div>
  )
}

export default TodayWeather
