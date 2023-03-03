var lat = 45.4112;
var lon = -75.6981;
var currentCity = "Ottawa";
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-input");


// function to pull API weather data
var getWeatherData = function (lat, lon) {
  // format the github api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,hourly,alerts&units=metric&appid=8afb55e108bfe22e6df569f88292df63";

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

// function to pull API geocoding data
var getLocationData = function (city) {
  // format the github api url
  var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+city+",ca&appid=8afb55e108bfe22e6df569f88292df63";

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      console.log(data[0].lat);
      console.log(data[0].lon);
      getWeatherData(data[0].lat, data[0].lon);
      return currentCity = data[0].name;
    });
  });
};


var formSubmitHandler = function(event){
  event.preventDefault();
  var cityName = cityInputEl.value.trim();
  if (cityName){
    getLocationData(cityName);
    cityInputEl.value = "";
  } else {
    alert("Please enter a city");
  };
};

// getWeatherData(lat, lon);

cityFormEl.addEventListener("submit", formSubmitHandler);

// function on load to check for previous saved data
// if data = null then just load searchbars
// else load previous search and data



// function to generate html elements based on API data

// event listener for search