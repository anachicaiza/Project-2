function showTemperature(response) {
  let valueTemperatureElement = document.querySelector("#value");
  let cityElement = document.querySelector("#main-title");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  let icon = `<img src="${response.data.condition.icon_url}" class="icon" />`;

  valueTemperatureElement.innerHTML = Math.round(
    response.data.temperature.current
  );
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  iconElement.innerHTML = icon;
}

function SearchCity(city) {
  let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(showTemperature);
}

function city(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  SearchCity(searchInput.value);
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

SearchCity("Paris");

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
