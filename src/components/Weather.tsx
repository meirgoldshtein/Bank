import React, { useEffect, useState } from 'react'
import WeatherDisplay from './weatherDisplay'

export default function Weather() {
    const [city, setCity] = useState<string>('')
    const [search, setSearch] = useState<boolean>(false)
    const [weather, setWeather] = useState<any>()
    const [error, setError] = useState<any>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const[degrees, setDegrees] = useState<'imperial' | 'metric'>('metric')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${degrees}&appid=d7f64e05043d19af9eb95658ec1a2f74`
    const fetchData = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setWeather(data)
            data.cod == 200 ? setLoading(true) : setLoading(false)
            data.cod == 200 ? setError(false) : setError(true)
            data.message ? setErrorMessage(data.message) : setErrorMessage('')
        }
        catch (err: any) {
            setError(true)
            setErrorMessage(err.message)
            console.error(err)
        }
    }

    useEffect(() => {
        const getData = async () => {
            console.log(city)
            if (city) {
                await fetchData()
            }
            else if (search) {
                setSearch(false)
                setError(true)
                setErrorMessage('הכנס שם עיר')
            }
        }

        getData() // קריאה לפונקציה האסינכרונית
        return () => {
            console.log('יוצא מעמוד מזג אוויר')
        }

    }, [search, degrees])
    return (
        <div className='weather'>
            <h1>Weather</h1>
            <input type="text" placeholder='שם העיר' value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={() => setSearch(!search)}>חיפוש</button>
            <div className="weatherContent">
                {loading && city && <WeatherDisplay weather={weather} setDegrees={setDegrees} degrees={degrees}/>}
                {error && errorMessage && <h1>{errorMessage}</h1>}
                {error && !errorMessage && <h1>לא נמצאו תוצאות</h1>}

            </div>
        </div>
    )
}
