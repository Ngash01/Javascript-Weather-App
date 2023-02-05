const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0e4689bbdmshb7e2369b781823cp13b932jsnce13f708af52',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
document.getElementById("cityname").innerHTML = city

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	document.getElementById("cloud_pct").innerHTML= response.cloud_pct
	document.getElementById("temp").innerHTML= response.temp
	document.getElementById("temp2").innerHTML= response.temp
	document.getElementById("feels_like").innerHTML= response.feels_like
	document.getElementById("humidity").innerHTML= response.Humidity
	document.getElementById("min_temp").innerHTML= response.min_temp
	document.getElementById("max_temp").innerHTML= response.max_temp
	document.getElementById("Windspeed").innerHTML= response.wind_speed
	document.getElementById("Windspeed2").innerHTML= response.wind_speed
	document.getElementById("Wind_degree").innerHTML= response.wind_degrees
	document.getElementById("sunset_").innerHTML= response.sunset
	document.getElementById("sunrise_").innerHTML= response.sunrise
	document.getElementById("humidity").innerHTML= response.humidity
	document.getElementById("humidity2").innerHTML= response.humidity

})
.catch(err => console.error(err));
	
}

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")

searchBtn.addEventListener('click', (e)=>{
	e.preventDefault()
	getWeather(searchInput.value)
})