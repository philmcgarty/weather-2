var cityName = "Ottawa";
var lat = 45.424721;
var lon = -75.6972;
// var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=metric&appid=8afb55e108bfe22e6df569f88292df63"

// function to pull API data
var getWeatherData = function(lat, lon) {
    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=metric&appid=8afb55e108bfe22e6df569f88292df63";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

getWeatherData(lat, lon);


// function on load to check for previous saved data
// if data = null then just load searchbars
// else load previous search and data



// function to generate html elements based on API data

// event listener for search