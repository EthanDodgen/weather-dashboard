var userFormEl = document.querySelector("#user-form")
var nameInputEl = document.querySelector("#username")
var currentTime = moment().format("YYYY-MM-D hh:mm:ss")
console.log(currentTime)
var currentDate = moment().format("(MM-D-YYYY)")
console.log(currentDate)

//var currentWeather = []
//console.log(currentWeather)

var saveSearch = JSON.parse(localStorage.getItem("city"))
console.log(saveSearch)



//event handler
var formSubmitHandler = function() {
    event.preventDefault()//cancels default action

    var cityName = nameInputEl.value.trim()
    console.log(cityName)

    if (cityName) {
        getUserInfo(cityName)
        var saveCity = JSON.parse(localStorage.getItem("city"))
        console.log("this is our city", saveCity)

    if(saveCity == null) {
        saveCity = []
    }
      saveCity.push(cityName)
      localStorage.setItem("city", JSON.stringify(saveCity))
      } else {
      alert("Please enter a city!")
    }
}

   



//takes city name from handler, fetches API data, sends to displayCity variable 
var getUserInfo = function(city) {//where does city come from and why does it work with any word?
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=008d095a9cd21e032380d9cc37c980a7"
    
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
      displayCity(data)
    })
  })
}

//receives/saves API data, inserts lat and lon into second API call??
var displayCity = function(searchedCity) {//where does searched city come from?
    console.log(searchedCity)//where is searchedCity coming from?

    var lat = searchedCity.coord.lat
    var lon = searchedCity.coord.lon
    var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=6149d2b1c6ef07dcbfaf0143ed91da08"

    fetch(apiUrl2).then(function(response) {//what is the purpose in entire syntax?
      response.json().then(function(data) {
      console.log(data)

    //pushes data to Array
    //currentWeather.push(searchedCity.name)
    //currentWeather.push(data.current.temp + " F")//why am I using "data" and not something similar to 
    //currentWeather.push(data.current.humidity + "%")
    //currentWeather.push(data.current.wind_speed + " MPH")
    //currentWeather.push(data.current.uvi)
    
    //displays data in container current weather
  
    document.getElementById("city-date").innerHTML = searchedCity.name + currentDate + ("<img src='http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png' alt='Icon depicting current weather.'>")
    document.getElementById("temperature").innerHTML = data.current.temp + " F"
    document.getElementById("humidity").innerHTML = data.current.humidity + "%"
    document.getElementById("wind-speed").innerHTML = data.current.wind_speed + " MPH"
    document.getElementById("uv-index").innerHTML = data.current.uvi

    //display cards
    document.getElementById("date-1").innerHTML = currentDate
    document.getElementById("icon-1").innerHTML = ("<img src='http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png' alt='Icon depicting current weather.'>")
    document.getElementById("temp-1").innerHTML = "Temperature: " + data.daily[1].temp.day + " F"
    document.getElementById("humidity-1").innerHTML = "Humidity: " + data.daily[1].humidity + "%"

    document.getElementById("date-2").innerHTML = currentDate
    document.getElementById("icon-2").innerHTML = ("<img src='http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>")
    document.getElementById("temp-2").innerHTML = "Temperature: " + data.daily[2].temp.day + " F"
    document.getElementById("humidity-2").innerHTML = "Humidity: " + data.daily[2].humidity + "%"

    document.getElementById("date-3").innerHTML = currentDate
    document.getElementById("icon-3").innerHTML = ("<img src='http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png' alt='Icon depicting current weather.'>")
    document.getElementById("temp-3").innerHTML = "Temperature: " + data.daily[3].temp.day + " F"
    document.getElementById("humidity-3").innerHTML = "Humidity: " + data.daily[3].humidity + "%"

    document.getElementById("date-4").innerHTML = currentDate
    document.getElementById("icon-4").innerHTML = ("<img src='http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png' alt='Icon depicting current weather.'>")
    document.getElementById("temp-4").innerHTML = "Temperature: " + data.daily[4].temp.day + " F"
    document.getElementById("humidity-4").innerHTML = "Humidity: " + data.daily[4].humidity + "%"

    document.getElementById("date-5").innerHTML = currentDate
    document.getElementById("icon-5").innerHTML = ("<img src='http://openweathermap.org/img/w/" + data.daily[5].weather[0].icon + ".png' alt='Icon depicting current weather.'>")
    document.getElementById("temp-5").innerHTML = "Temperature: " + data.daily[5].temp.day + " F"
    document.getElementById("humidity-5").innerHTML = "Humidity: " + data.daily[5].humidity + "%"
    
     

    })
  })
}

//displays city name from local storage
//document.getElementById("save-1").innerHTML = saveSearch[0]
//document.getElementById("save-2").innerHTML = saveSearch[1]
//document.getElementById("save-3").innerHTML = saveSearch[2]
//document.getElementById("save-4").innerHTML = saveSearch[3]
//document.getElementById("save-5").innerHTML = saveSearch[4]

//loop over array
  //for(var i = 0; i < searchedCity.list; i++) {
    
        //var searchTime = searchedCity.list[i].dt_txt
          //console.log(searchTime)

    //if (currentTime < searchTime) {
        //console.log("Works")


  //}

//event listener
  userFormEl.addEventListener("submit", formSubmitHandler)