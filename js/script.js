"use strict";

const preloader = document.querySelector('.preloader');

setTimeout(function () {

    preloader.style.display = 'none';

   



},15000);



document.addEventListener("DOMContentLoaded", function () {
    //Variables
    let weatherAppi = "https://fcc-weather-api.glitch.me/api/current?";
    let lat;
    let lon;
    let temperatureUnit = "C";

    //Get location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = "lat=" + position.coords.latitude;
                let lon = "lon=" + position.coords.longitude;
                getWeather(lat, lon);
            });
        } else {
            alert("Geolocation is not supported by this browser. !!!");
        }
    }
    //Run function
    getLocation();
    
    $(".temperatureUnit").click(function () {
        var currentTempUnit = $(".temperatureUnit").text();
        var newTempUnit = currentTempUnit == "C" ? "F" : "C";
        $("#unit").text(newTempUnit);
        if (newTempUnit == "F") {
          var fahTemp = Math.round(parseInt($(".temperature").text()) * 9 / 5 + 32);
          $(".temperature").text(fahTemp + " " + String.fromCharCode(176));
        } else {
          $(".temperature").text(curTempC + " " + String.fromCharCode(176));
        }
      });
});

function getWeather(lat, lon) {
    let weatherAppi = "https://fcc-weather-api.glitch.me/api/current?";
    const urlString = weatherAppi + lat + "&" + lon;
    const cityName = document.querySelector('.cityName');
    const countryName = document.querySelector('.countryName');
    const temperature = document.querySelector('.temperature');
    $.ajax({
        url: urlString, success: function (result) {
            cityName.innerHTML = result.name + ", ";
            countryName.innerHTML = result.sys.country;
            var curTempC = Math.round(result.main.temp * 10) / 10;
            temperature.innerHTML = curTempC + " " + String.fromCharCode(176) + "C";
            $("#humidity").text(result.main.humidity + "%");
            $("#sky").text(result.weather[0].description);
        }
    });
}

clock();  

    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }

    if (hour > 12) {
      hour = hour - 12;
    }
      
    if(hour==0){ 
      hour=12;
    }

    if(TwentyFourHour < 12) {
       mid = 'am';
    }
      
    document.getElementById('time').innerHTML = hour+':'+min + mid ;
    setTimeout(clock, 1000);

  }
  

