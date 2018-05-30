"use strict";

(() => {
  const preloader = document.querySelector(".preloader");
  setTimeout(function() {
    preloader.style.display = "none";
  }, 4500);

  document.addEventListener("DOMContentLoaded", function() {
    //Variables
    let weatherAppi = "https://fcc-weather-api.glitch.me/api/current?";
    let lat;
    let lon;
    //Get location
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
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

    function getWeather(lat, lon) {
      let weatherAppi = "https://fcc-weather-api.glitch.me/api/current?";
      const urlString = weatherAppi + lat + "&" + lon;
      const cityName = document.querySelector(".cityName");
      const countryName = document.querySelector(".countryName");
      const temperature = document.querySelector(".temperature");
      const humidity = document.querySelector(".humidity");
      const sky = document.querySelector(".sky");
      $.ajax({
        url: urlString,
        success: function(result) {
          cityName.innerHTML = result.name + ", ";
          countryName.innerHTML = result.sys.country;
          let curTempC = Math.round(result.main.temp * 10) / 10;
          temperature.innerHTML =
            curTempC + " " + String.fromCharCode(176) + "C";
          humidity.innerHTML = result.main.humidity + "%";
          sky.innerHTML = result.weather[0].description;
        }
      });
    }
    clock();
    function clock() {
      let now = new Date();
      let TwentyFourHour = now.getHours();
      let hour = now.getHours();
      let min = now.getMinutes();
      let mid = "pm";
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }
      if (hour == 0) {
        hour = 12;
      }
      if (TwentyFourHour < 12) {
        mid = "am";
      }
      document.querySelector("time").innerHTML = hour + ":" + min + mid;
      setTimeout(clock, 1000);
    }
   
  });
})();
