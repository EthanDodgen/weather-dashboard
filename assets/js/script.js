var userFormEl = document.querySelector("#user-form")
var nameInputEl = document.querySelector("#username")
var currentTime = moment().format("YYYY-MM-D hh:mm:ss")
console.log(currentTime)
var currentWeather = []
console.log(currentWeather)



//event handler
var formSubmitHandler = function(event) {
    event.preventDefault()//cancels default action

    var cityName = nameInputEl.value.trim()
    console.log(cityName)

    if (cityName) {
        getUserInfo(cityName)
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

//receives/saves API data??
var displayCity = function(searchedCity) {
    console.log(searchedCity)//where is searchedCity coming from?

    var lat = searchedCity.coord.lat
    console.log(lat)
    var lon = searchedCity.coord.lon
    console.log(lon)

    var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=6149d2b1c6ef07dcbfaf0143ed91da08"

    fetch(apiUrl2).then(function(response) {
      response.json().then(function(data) {
      console.log(data)
    })
  })
}


  




    

    //displays current weather
    //currentWeather.push(searchedCity.name)
    //currentWeather.push(searchedCity.main.temp)
    //currentWeather.push(searchedCity.main.humidity)
    //currentWeather.push(searchedCity.wind.speed)



  //loop over array
  //for(var i = 0; i < searchedCity.list; i++) {
    
        //var searchTime = searchedCity.list[i].dt_txt
          //console.log(searchTime)

    //if (currentTime < searchTime) {
        //console.log("Works")


  //}




  //var getOneCall = function() {
 







//event listener
  userFormEl.addEventListener("submit", formSubmitHandler)



 //next steps
  //*obtain data needed from API and display with city

  //create blank cards to be appended 
 
//display current weather

 //display Forecast

//save to local storage

//display to search list


//create search history