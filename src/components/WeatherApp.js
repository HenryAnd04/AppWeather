import React, { useEffect, useState } from 'react';
import ContentWeather from './ContentWeather';
import WeatherForm from './WeatherForm';
 

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() =>{
        loadInfo()
    }, [])

    async function loadInfo(city = 'tegucigalpa') {
        try {
            const request = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=62afc9a123d04123b53234449231401&q=${city}&aqi=no`);
            const json = await request.json();
            setWeather(json)
            console.log(json);

            } catch (error) {
            console.log(error);
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

  return (
    <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <ContentWeather weather={weather}/>
       
    </div>
  )
}


export default WeatherApp