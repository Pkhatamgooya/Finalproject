let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let heading = document.querySelector("h5");
  heading.innerHTML = `${city} `;
  let p = document.querySelector("p");
  p.innerHTML = `${temperature}° F `;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let key = "07a169e48319faaa208f601f0a8a20b3";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);

function displayWeatherCondition(response) {
  document.querySelector("#search-text-input").innerHTML = response.data.name;
  var temperatureInFahrenheit = Math.round(response.data.main.temp);
  document.querySelector(".temperature2").innerHTML =
    temperatureInFahrenheit + "° F";
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  if (searchInput.value) {
    let result = document.querySelector("#result");
    result.innerHTML = `${searchInput.value} `;

    let city = searchInput.value;
    let apiKey = "07a169e48319faaa208f601f0a8a20b3";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherCondition);
  } else {
    alert("Please enter a city");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//bonus feature

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
}
