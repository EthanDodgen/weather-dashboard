
var getUserCity = function(user) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Nashville&appid=008d095a9cd21e032380d9cc37c980a7"
  
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data)
      })
    })
  }
  getUserCity()
 

//get the users city from input and info from API

 //display current weather

 //display Forecast

//save to local storage


//create search history




