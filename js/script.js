var weathAPIKEY = "Q9gFeR9dgDFhITR+jN+Muw==n7V0ghzTBeRhnS42 "
var city
// using the ninjas for my API
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var requestUrl = 'https://api.api-ninjas.com/v1/weather?city=' + city;


var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}

getApi(requestUrl);