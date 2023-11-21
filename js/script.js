var weathAPIKEY = "Q9gFeR9dgDFhITR+jN+Muw==n7V0ghzTBeRhnS42 "
var city
// using the ninjas for my API
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var requestUrl = 'https://api.api-ninjas.com/v1/weather?city={}' .format(city)


var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
      return response.json();
  });
}

fetchButton.addEventListener('click', getApi)(requestUrl);