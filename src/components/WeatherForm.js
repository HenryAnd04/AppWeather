import React, { useState } from 'react';
import '../components/WeatherForm.css'

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('');

    function onChange(e){
        const value = e.target.value

        if(value !== ''){
            setCity(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(city)
    }

  return (
        <form className='form-city'>
            <input type="text" onChange={onChange} placeholder='Busca una ciudad' />
            <button onClick={handleSubmit} className='btn btn-success'>Buscar</button>
        </form>
  )
}

export default WeatherForm