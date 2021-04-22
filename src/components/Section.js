const Section = ({ weather }) =>{

	return (
		<div>
			<div className="temp center">
				<h1>{weather.curTemp}°C</h1>
			</div>
			<div className="temp center">
				<h3>{weather.minTemp}°C / {weather.maxTemp}°C</h3>
			</div>
			<div className="temp center">
				<h3>{weather.main}</h3>
			</div>
		</div>
	)
}

export default Section	