import React, { useState } from 'react'
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/CurrentWeather'
import { WEATHER_API_KEY } from './apiservice/api'
import { WEATHER_API_URL } from './apiservice/api'
function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json()
        const foreCastResponse = await res[1].json()


        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...foreCastResponse })
      })
      .catch((err) => console.log(err))
  }


  console.log(currentWeather)
  console.log(forecast)

  return (
    <>
      <div className='container'>
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather data={currentWeather} />
      </div>
    </>
  )
}

export default App