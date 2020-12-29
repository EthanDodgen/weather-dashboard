var userFormEl = document.querySelector("#user-form")
var nameInputEl = document.querySelector("#username")

//event handler
var formSubmitHandler = function(event) {
    event.preventDefault()

    var username = nameInputEl.value.trim()

    if (username) {
        getUserCity(username)
    } else {
        alert("Please enter a city!")
    }
}

//takes user input and fetches correct city in the API
var getUserCity = function(user) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+username.value+"&appid=008d095a9cd21e032380d9cc37c980a7"
  
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data)
      })
    })
  }
  getUserCity()

//event listener
  userFormEl.addEventListener("submit", formSubmitHandler);
 

//get the users city from input and info from API

 //display current weather

 //display Forecast

//save to local storage


//create search history




