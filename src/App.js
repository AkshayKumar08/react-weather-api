import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import {useEffect, useState} from 'react'
import './App.css'

const api = {
  key: "41bc47c6426a856a0b22036586852e8b",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState({
    curTemp: 0,
    minTemp: 0,
    maxTemp: 0,
    main: '',
    region: ''
  })
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const loc = `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
      fetchData(loc)
    })
  }, [])

  const fetchData = async(api) => {  
    try{
      const res = await fetch(api)
      const data = await res.json()
      if( data.cod === 200){
        setWeather(prevState => ({
          ...prevState,
          curTemp: Math.round(data.main.temp),
          minTemp: Math.round(data.main.temp_max),
          maxTemp: Math.round(data.main.temp_min),
          main: data.weather[0].main,
          region: data.name
        }))
      }
      else{ 
        const err = 'Location not found'
        setWeather(prevState => ({
          ...prevState,
          curTemp: 0,
          minTemp: 0,
          maxTemp: 0,
          main: '---',
          region: 'location not found'
        }))
      }
    }
    catch(err){}    
  }

  const getWeather = async (query) => {
      const loc = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`
      fetchData(loc)
  }

  return (
    <div className="container">
      <Header fetchData={ getWeather }/>
      <Section weather={ weather } />
      <Footer weather={ weather } />
    </div>
  );
}

export default App;
