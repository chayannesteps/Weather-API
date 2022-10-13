var APIkey = '98cec07e3870640f25bf7a3f480159e9'

var searchButton = document.querySelector('#search-button')


function searchWeather() {
    console.log('working?')
    var city = document.querySelector('#citysearch').value
    var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    
    fetch (currentWeatherURL)
.then(response=>response.json())
.then(data => {
    console.log(data)
    var currentDate= document.querySelector('#currentDate')
    var currentTemp= document.querySelector('#currentTemp')
    var currentHum= document.querySelector('#currentHum')
    var currentWind= document.querySelector('#currentWind')

    currentTemp.textContent= data.main.temp
    currentHum.textContent= data.main.humidity
    currentWind.textContent= data.wind.speed
    currentDate.textContent= moment().format('L')
    var forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIkey}&units=imperial`
    fetch(forecastWeatherURL)
    .then(forecast => forecast.json())
    .then(foreData=>{
        var day1Temp = document.querySelector('.day1Temp')
        var day1Date = document.querySelector('.day1Date')
        day1Temp.textContent = 'Temp: ' + foreData.list[0].main.temp
        day1Date.textContent = 'Date: ' + moment().add(1, 'days').format('L')
        console.log(foreData)
    })
})

}

searchButton.addEventListener('click', searchWeather)
