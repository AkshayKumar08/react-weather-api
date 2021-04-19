import Header from './components/Header'

const api = {
  key: "41bc47c6426a856a0b22036586852e8b",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const getWeather = async (query) => {
    const loc = `${api.base}weather?q=${query}&appid=${api.key}`
    const res = await fetch(loc)
    const data = await res.json()
    console.log(data.weather[0].main)

  }
  return (
    <div className="App">
      <Header getData={ getWeather }/>
    </div>
  );
}

export default App;
