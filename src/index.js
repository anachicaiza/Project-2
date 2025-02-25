function showTemperature(response) {
  let valueTemperatureElement = document.querySelector("#value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#main-title");
  let descriptionElement = document.querySelector("#description");
  let description = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = description;
  console.log(response);
  valueTemperatureElement.innerHTML = temperature;
}

function city(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDate = days[day];
  return `${formattedDate} ${hours}:${minutes}`;
}

let searchElement = document.querySelector("#city-form");
searchElement.addEventListener("submit", city);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
