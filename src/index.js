function city(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let title = document.querySelector("#main-title");
  title.innerHTML = searchInput.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Saturday",
  ];

  let formattedDate = days[day];
  return `${formattedDate} ${hours}:${minutes}`;
}

let cityElement = document.querySelector("#city-form");
cityElement.addEventListener("submit", city);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
