function city(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let title = document.querySelector("#main-title");
  title.innerHTML = searchInput.value;
}

let cityElement = document.querySelector("#city-form");
cityElement.addEventListener("submit", search);
