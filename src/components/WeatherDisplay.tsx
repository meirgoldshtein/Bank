import React from 'react'
interface Props {
    weather: any
    setDegrees:(x:'imperial' | 'metric')=> void
    degrees:'imperial' | 'metric'
}

export default function WeatherDisplay({weather, setDegrees, degrees}:Props) {
  return (
    <div className="weatherDisplay">
        <h1>Resault to {weather.name} Weather</h1>
        <img src= {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
        <h2>Temp - {weather.main.temp}</h2>
        <button onClick={() => setDegrees(degrees === 'metric' ? 'imperial' : 'metric')}>
            {degrees === 'metric' ? 'celsius' : 'fahrenheit'}
        </button>
    </div>
  )
}
