import React from 'react'
interface Props {
    weather: any
}

export default function WeatherDisplay({weather}:Props) {
  return (
    <div className="weatherDisplay">
        <h1>Resault to {weather.name} Weather</h1>
        <h2>Temp - {weather.main.temp}</h2>
        <h2>Humidity - {weather.main.humidity}</h2>
    </div>
  )
}
