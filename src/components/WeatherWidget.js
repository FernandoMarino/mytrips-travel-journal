import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

const WeatherBox = styled.section`
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 0.95rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

`



export default function WeatherWidget({ location, date }) {


    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = '16527444cd5242ce81902523250411'
        const query = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${location}&dt=${date}`
        
        fetch(query)
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setError(data.error.message);
                } else {
                    const day = data.forecast?.forecastday?.[0]?.day;
                    if(day) {
                        setWeather(day);
                    } else {
                        setError('Dados meteorológicos não disponíveis para essa data.')
                    }
                }
            })
            .catch(() => setError(`Erro ao buscar clima para ${location}`));
        }, [location, date]
    );



  return (
    <WeatherBox>
        <h3>Clima em {location} em {date}</h3>
        {error && <p>⚠️ {error}</p>}
        {weather ? (
            <>
            <p>{weather.condition.text}, {weather.avgtemp_c}°C</p>
            <p>Vento: {weather.maxwind_kph} km/h • Umidade: {weather.avghumidity}%</p>
            </>
        ) : (
        !error && <p>Carregando clima...</p>
      )}

    </WeatherBox>
  )
}
