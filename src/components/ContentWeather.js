import React from 'react'
import '../components/ContentWeather.css'

const ContentWeather = ({weather}) => {
  function claseDiv(weather){
    let clase;
    switch (weather?.current.condition.text) {
      case 'Partly cloudy':
        clase = 'fondo1';
        break;
      case 'Cloudy':
        clase = 'fondo2';
        break;
      case 'Sunny':
        clase = 'fondo3';
        break;
        case 'Clear':
        clase = 'fondo4';
        break;
        case 'Rainy':
        clase = 'fondo5';
        break;
        case 'Overcast':
        clase = 'fondo6';
        break;
        case 'Light rain':
        clase = 'fondo7';
        break;
      default:
        clase = 'fondo';
        
    }
    return clase;
  }
  return (
    <div id='container-weather' className={claseDiv(weather)}>
        <div className='pais-ciudad'>
        <h2>{weather?.location.country}</h2>
        <h3>{weather?.location.name}</h3>
        <h4> {weather?.current.temp_c}° centigrados </h4>
        </div>

        <div id='temperatura'  >
              <p> {weather?.current.condition.text} </p>
              <img src={weather?.current.condition.icon} alt="Img-current-time"/>
              <p> Sensación térmica {weather?.current.feelslike_c}° </p>
              <p> Humedad {weather?.current.humidity}% </p>
        </div>
    </div>
)}

export default ContentWeather