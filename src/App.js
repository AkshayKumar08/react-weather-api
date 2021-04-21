import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import {useState} from 'react'
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
  // const [lastUpdate, setlastUpdate] = useState('')
  // const [error, setError] = useState('')

  const getWeather = async (query) => {
    try{
      const loc = `${api.base}weather?q=${query}&appid=${api.key}`
      const res = await fetch(loc)
      const data = await res.json()
      if( data.cod === 200){
        setCurTemp(parseInt(data.main.temp-273))
        setMinTemp(parseInt(data.main.temp_max-273))
        setMaxTemp(parseInt(data.main.temp_min-273))
        setWeather(data.weather[0].main)
        setRegion(query)
      }
      else{ 
        const err = 'Location not found'
        setRegion(err)
      }
    }
    catch(err){
      
    }
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
      <Footer region={ region }/>
    </div>
  );
}

export default App;
