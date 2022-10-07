var APIkey = '98cec07e3870640f25bf7a3f480159e9'

var searchButton = document.querySelector('.search-button')


function searchWeather() {
    var city = document.querySelector('.search-input').value
    var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    var forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial`
    fetch (currentWeatherURL)
.then(response=>response.json())
.then(data=>{
    var currentTemp = document.querySelector('.temp')
    currentTemp.textContent = 'Temp: ' + data.main.temp
    console.log(data)
    fetch (forecastWeatherURL)
    .then(res=>res.json())
    .then(weatherData=>{
        console.log(weatherData)

    })
})
}

searchButton.addEventListener('click', searchWeather)
