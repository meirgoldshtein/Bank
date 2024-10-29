import React, { useEffect, useState } from 'react'
import WeatherDisplay from './weatherDisplay'

export default function Weather() {
    const [city, setCity] = useState<string>('')
    const [search, setSearch] = useState<boolean>(false)
    const [weather, setWeather] = useState<any>()
    const [error, setError] = useState<any>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7f64e05043d19af9eb95658ec1a2f74`
            const fetchData = async () => {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                setWeather(data)
                data.cod == 200 ? setLoading(true) : setLoading(false)
                data.cod == 200 ? setError(false)  : setError(true)
                console.log(data.code)
                data.message ? setErrorMessage(data.message) : setErrorMessage('')
            }
            
            fetchData()
            setCity('')
            
        }
        else if (search) {
            setSearch(false)
            setError(true)
            setErrorMessage('הכנס שם עיר')
        }
        return () => {
            console.log('יוצא מעמוד מזג אוויר')
        }
        
    }, [search])
  return (
    <div className='weather'>
      <h1>Weather</h1>
      <input type="text" placeholder='שם העיר' value={city} onChange={(e) => setCity(e.target.value) } />
      <button onClick={() => setSearch(true)}>חיפוש</button>
      <div className="weatherContent">
        {loading && <WeatherDisplay weather={weather} />}
        {error &&  errorMessage && <h1>{errorMessage}</h1>}
        {error && !errorMessage && <h1>לא נמצאו תוצאות</h1>}

      </div>
    </div>
  )
}
