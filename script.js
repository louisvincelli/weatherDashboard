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
var icon = document.querySelector("#icon");

var time = moment().format('L');

// var previousSearch = document.querySelectorAll('.previous');

// for(var i = 0; i < previousSearch.length; i++){
//     previousSearch[i].addEventListener('click', function(event){
//         console.log(event.target.value);
//     })
// }
submitBtn.addEventListener("click", fetchWeather);

 function fetchWeather(){
    //event.preventDefault();
    var desiredCity = input.value;
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${desiredCity}&APPID=${apiKey}`;
    console.log(input.value)

    var searchHistory = document.getElementById('searchHistory');
    var searchedCityBtn = document.createElement('button');
    var breakBtn = document.createElement('br');
    searchedCityBtn.setAttribute('id', "searchedCityBtn");
    searchedCityBtn.innerText = desiredCity;
    searchHistory.append(breakBtn);
    searchHistory.append(searchedCityBtn);
    
    searchedCityBtn.classList.add('previous');

    var previousSearch = document.querySelectorAll('.previous');

    for(var i = 0; i < previousSearch.length; i++){
        previousSearch[i].addEventListener('click', function(event){
            console.log(event.target.innerText);
            var queryUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.innerText}&APPID=${apiKey}`;
            fetch(queryUrl2)
    .then(function (res) {
      return res.json();
    }).then(function(data){
        console.log(data);

        city.innerText = data.name + " " + time;
        icon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
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

            var day2icon = document.querySelector('#icon2');
            day2icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`);

            var temp2 = document.querySelector("#temp2");
            temp2.innerText = "Temp: " + Math.round((data.daily[1].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity2 = document.querySelector('#humidity2');
            humidity2.innerText = "Humidity: " + data.daily[1].humidity + "%";

            var windSpeed2 = document.querySelector('#windspeed2');
            windSpeed2.innerText = "Humidity: " + data.daily[1].wind_speed + "MPH";

            var day3title = document.querySelector("#day3title");
            day3title.innerText = moment().add(2, 'days').format('L');

            var day3icon = document.querySelector('#icon3');
            day3icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`);

            var temp3 = document.querySelector("#temp3");
            temp3.innerText = "Temp: " + Math.round((data.daily[2].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity3 = document.querySelector('#humidity3');
            humidity3.innerText = "Humidity: " + data.daily[2].humidity + "%";

            var windSpeed3 = document.querySelector('#windspeed3');
            windSpeed3.innerText = "Humidity: " + data.daily[2].wind_speed + "MPH";

            var day4title = document.querySelector("#day4title");
            day4title.innerText = moment().add(3, 'days').format('L');

            var day4icon = document.querySelector('#icon4');
            day4icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`);

            var temp4 = document.querySelector("#temp4");
            temp4.innerText = "Temp: " + Math.round((data.daily[3].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity4 = document.querySelector('#humidity4');
            humidity4.innerText = "Humidity: " + data.daily[3].humidity + "%";

            var windSpeed4 = document.querySelector('#windspeed4');
            windSpeed4.innerText = "Humidity: " + data.daily[3].wind_speed + "MPH";

            var day5title = document.querySelector("#day5title");
            day5title.innerText = moment().add(4, 'days').format('L');

            var day5icon = document.querySelector('#icon5');
            day5icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[4].weather[0].icon}.png`);

            var temp5 = document.querySelector("#temp5");
            temp5.innerText = "Temp: " + Math.round((data.daily[4].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity5 = document.querySelector('#humidity5');
            humidity5.innerText = "Humidity: " + data.daily[4].humidity + "%";

            var windSpeed5 = document.querySelector('#windspeed5');
            windSpeed5.innerText = "Humidity: " + data.daily[4].wind_speed + "MPH";

            var day6title = document.querySelector("#day6title");
            day6title.innerText = moment().add(5, 'days').format('L');

            var day6icon = document.querySelector('#icon6');
            day6icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[5].weather[0].icon}.png`);

            var temp6 = document.querySelector("#temp6");
            temp6.innerText = "Temp: " + Math.round((data.daily[5].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity6 = document.querySelector('#humidity6');
            humidity6.innerText = "Humidity: " + data.daily[5].humidity + "%";

            var windSpeed6 = document.querySelector('#windspeed6');
            windSpeed6.innerText = "Humidity: " + data.daily[5].wind_speed + "MPH";

        }); 
    })
        })
    }


    fetch(queryUrl)
    .then(function (res) {
      return res.json();
    }).then(function(data){
        console.log(data);

        city.innerText = data.name + " " + time;
        icon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
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

            var day2icon = document.querySelector('#icon2');
            day2icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`);

            var temp2 = document.querySelector("#temp2");
            temp2.innerText = "Temp: " + Math.round((data.daily[1].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity2 = document.querySelector('#humidity2');
            humidity2.innerText = "Humidity: " + data.daily[1].humidity + "%";

            var windSpeed2 = document.querySelector('#windspeed2');
            windSpeed2.innerText = "Humidity: " + data.daily[1].wind_speed + "MPH";

            var day3title = document.querySelector("#day3title");
            day3title.innerText = moment().add(2, 'days').format('L');

            var day3icon = document.querySelector('#icon3');
            day3icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`);

            var temp3 = document.querySelector("#temp3");
            temp3.innerText = "Temp: " + Math.round((data.daily[2].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity3 = document.querySelector('#humidity3');
            humidity3.innerText = "Humidity: " + data.daily[2].humidity + "%";

            var windSpeed3 = document.querySelector('#windspeed3');
            windSpeed3.innerText = "Humidity: " + data.daily[2].wind_speed + "MPH";

            var day4title = document.querySelector("#day4title");
            day4title.innerText = moment().add(3, 'days').format('L');

            var day4icon = document.querySelector('#icon4');
            day4icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`);

            var temp4 = document.querySelector("#temp4");
            temp4.innerText = "Temp: " + Math.round((data.daily[3].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity4 = document.querySelector('#humidity4');
            humidity4.innerText = "Humidity: " + data.daily[3].humidity + "%";

            var windSpeed4 = document.querySelector('#windspeed4');
            windSpeed4.innerText = "Humidity: " + data.daily[3].wind_speed + "MPH";

            var day5title = document.querySelector("#day5title");
            day5title.innerText = moment().add(4, 'days').format('L');

            var day5icon = document.querySelector('#icon5');
            day5icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[4].weather[0].icon}.png`);

            var temp5 = document.querySelector("#temp5");
            temp5.innerText = "Temp: " + Math.round((data.daily[4].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity5 = document.querySelector('#humidity5');
            humidity5.innerText = "Humidity: " + data.daily[4].humidity + "%";

            var windSpeed5 = document.querySelector('#windspeed5');
            windSpeed5.innerText = "Humidity: " + data.daily[4].wind_speed + "MPH";

            var day6title = document.querySelector("#day6title");
            day6title.innerText = moment().add(5, 'days').format('L');

            var day6icon = document.querySelector('#icon6');
            day6icon.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[5].weather[0].icon}.png`);

            var temp6 = document.querySelector("#temp6");
            temp6.innerText = "Temp: " + Math.round((data.daily[5].temp.max - 273.15) * 1.8 + 32) + " °F";

            var humidity6 = document.querySelector('#humidity6');
            humidity6.innerText = "Humidity: " + data.daily[5].humidity + "%";

            var windSpeed6 = document.querySelector('#windspeed6');
            windSpeed6.innerText = "Humidity: " + data.daily[5].wind_speed + "MPH";

        }); 
    })
};