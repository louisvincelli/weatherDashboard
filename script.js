var apiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';
var desiredCity = 'Sacramento';
//var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
var queryUrl = `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`;    


var mainCard = document.querySelector(".main-card");
var card = document.querySelector(".card");
var input = document.querySelector("#searchBar");
var submitBtn = document.querySelector(".btn");

var city = document.querySelector(".city");
var temperature = document.querySelector(".temperature");
var humidity = document.querySelector(".humidity");
var windspeed = document.querySelector(".windspeed");
var UVIndex = document.querySelector(".UVIndex");

var time = moment().format('L');

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    var desiredCity = input.value;
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${desiredCity}&APPID=${apiKey}`;
    console.log(input.value)
    fetch(queryUrl)
    .then(function (res) {
      return res.json();
    }).then(function(data){
        console.log(data);

        city.innerText = data.name + " " + time; 
        temperature.innerText = "Temperature: " + Math.round((data.main.temp - 273.15) * 1.8 + 32) + " °F";
        humidity.innerText = "Humidity: " + data.main.humidity + "%";
        windspeed.innerText = "Wind Speed: " + data.wind.speed + " MPH";

        var latitude = data.coord.lat;
        var longitude = data.coord.lon;
        var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`;
        fetch(apiUrl)
        .then(function(res2) {
            return res2.json();
        }).then(function(data) {
            console.log(data)

            UVIndex.innerText = "UV Index: " +data.daily[0].uvi;
            var day2title = document.querySelector("#day2title");
            day2title.innerText = moment().add(1, 'days').format('L');

            var temp2 = document.querySelector("#temp2");
            temp2.innerText = "Temp: " + Math.round((data.daily[1].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity2 = document.querySelector('#humidity2');
            humidity2.innerText = "Humidity: " + data.daily[1]. humidity + "%";

            var day3title = document.querySelector("#day3title");
            day3title.innerText = moment().add(1, 'days').format('L');

            var temp3 = document.querySelector("#temp3");
            temp3.innerText = "Temp: " + Math.round((data.daily[1].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity3 = document.querySelector('#humidity3');
            humidity3.innerText = "Humidity: " + data.daily[1]. humidity + "%";

            var day4title = document.querySelector("#day4title");
            day4title.innerText = moment().add(1, 'days').format('L');

            var temp4 = document.querySelector("#temp4");
            temp4.innerText = "Temp: " + Math.round((data.daily[1].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity4 = document.querySelector('#humidity4');
            humidity4.innerText = "Humidity: " + data.daily[1]. humidity + "%";

            var day5title = document.querySelector("#day5title");
            day5title.innerText = moment().add(1, 'days').format('L');

            var temp5 = document.querySelector("#temp5");
            temp5.innerText = "Temp: " + Math.round((data.daily[1].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity5 = document.querySelector('#humidity5');
            humidity5.innerText = "Humidity: " + data.daily[1]. humidity + "%";

        }); 
    })
});