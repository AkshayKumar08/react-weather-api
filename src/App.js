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

  const [curTemp, setCurTemp] = useState(0)
  const [minTemp, setMinTemp] = useState()
  const [maxTemp, setMaxTemp] = useState()
  const [weather, setWeather] = useState('')
  const [region, setRegion] = useState('Enter Location')
  const [lastUpdate, setlastUpdate] = useState(1)
  // const [error, setError] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const loc = `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`
      fetchData(loc)
    })
  }, [])

  const fetchData = async(api) => {  
    try{
      const res = await fetch(api)
      const data = await res.json()
      if( data.cod === 200){
        setCurTemp(parseInt(data.main.temp-273))
        setMinTemp(parseInt(data.main.temp_max-273))
        setMaxTemp(parseInt(data.main.temp_min-273))
        setWeather(data.weather[0].main)        
        setRegion(data.name)
      }
      else{ 
        const err = 'Location not found'
        setRegion(err)
      }
    }
    catch(err){}    
  }

  const getWeather = async (query) => {
      const loc = `${api.base}weather?q=${query}&appid=${api.key}`
      fetchData(loc)
  }

  return (
    <div className="container">
      <Header fetchData={ getWeather }/>
      {/*<p >{region}:{error}:{data.main}:{data.description}</p>*/}
      <Section
      curTemp={ curTemp }
      minTemp={ minTemp }
      maxTemp={ maxTemp }
      weather={ weather } />
      <Footer region={ region } lastUpdate={ lastUpdate }/>
    </div>
  );
}

export default App;
