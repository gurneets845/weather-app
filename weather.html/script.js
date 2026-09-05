const API_KEY = "7fe7764da79c70a763f7e27eab6084e6";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchButton");

const errorMessage = document.getElementById("error");

const cityElement = document.getElementById("city");
const tempElement = document.getElementById("temp");
const weatherElement = document.getElementById("weather");

async function getWeather() {
  try {
    // Get city from input
    const city = input.value;

    // Convert city into URL-safe format
    const encodedCity = encodeURIComponent(city);

    // Create API URL
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      encodedCity +
      "&appid=" +
      API_KEY +
      "&units=metric";

    // Send request
    const response = await fetch(url);

    // Check if city was found
    if (!response.ok) {
      throw new Error("City or country not found");
    }

    // Convert response into JavaScript data
    const data = await response.json();

    // Show data on screen
    cityElement.textContent = data.name;

    tempElement.textContent = "Temperature: " + data.main.temp + " °C";

    weatherElement.textContent = "Weather: " + data.weather[0].description;

    // Remove old error
    errorMessage.textContent = "";
  } catch (error) {
    errorMessage.textContent = error.message;
  }
}

button.addEventListener("click", getWeather);
