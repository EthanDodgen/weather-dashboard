var userFormEl = document.querySelector("#user-form")
var nameInputEl = document.querySelector("#username")

//event handler
var formSubmitHandler = function(event) {
    event.preventDefault()

    var cityName = nameInputEl.value.trim()
        console.log(cityName)

    if (cityName) {
        getUserCity(cityName)
    } else {
        alert("Please enter a city!")
    }
}

//takes user input and fetches correct city in the API
var getUserCity = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=008d095a9cd21e032380d9cc37c980a7"
  
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data)
      })
    })
  }
  
//event listener
  userFormEl.addEventListener("submit", formSubmitHandler)
 
//display current weather

 //display Forecast

//save to local storage


//create search history




