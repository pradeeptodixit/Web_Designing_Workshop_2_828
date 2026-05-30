const apiKey = "YOUR_API_KEY";

const url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;

  if (city !== "") {
    getWeather(city);
  }
});

async function getWeather(city) {

  const weatherURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {

    const response = await fetch(weatherURL);

    const data = await response.json();

    document.getElementById("city-name")
      .innerHTML = data.name;

    document.getElementById("temp")
      .innerHTML =
      Math.round(data.main.temp) + "°C";

    document.getElementById("pressure")
      .innerHTML =
      data.main.pressure + " hPa";

    document.getElementById("visibility")
      .innerHTML =
      (data.visibility / 1000) + " km";

    document.getElementById("condition").innerText =
      data.weather[0].main;

    document.getElementById("humidity").innerText =
      data.main.humidity + "%";

    document.getElementById("wind").innerText =
      data.wind.speed + " km/h";

    document.getElementById("feels-like").innerText =
      Math.round(data.main.feels_like) + "°C";

    document.getElementById("location-btn")
      .addEventListener("click", getCurrentLocation);

    document.getElementById("voice-btn")
      .addEventListener("click", startVoiceSearch);

    document.getElementById("theme-btn")
      .addEventListener("click", toggleTheme);

    const iconCode = data.weather[0].icon;

    document.getElementById("weather-icon").src =
      `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  }

  catch (error) {
    alert("City not found!");
  }
  cityInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

      getWeather(cityInput.value);

    }

  });

}

function startVoiceSearch() {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  const recognition =
    new SpeechRecognition();

  recognition.start();

  recognition.onresult = (event) => {

    const city =
      event.results[0][0].transcript;

    cityInput.value = city;

    getWeather(city);

  };

}

function getCurrentLocation() {

  navigator.geolocation.getCurrentPosition(

    (position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getWeatherByCoords(lat, lon);

    });

}

function updateBackground(condition) {

  const body = document.body;

  if (condition.includes("Rain")) {

    body.style.background =
      "linear-gradient(135deg,#1e3c72,#2a5298)";

  }

  else if (condition.includes("Cloud")) {

    body.style.background =
      "linear-gradient(135deg,#757f9a,#d7dde8)";

  }

  else {

    body.style.background =
      "linear-gradient(135deg,#ff9966,#ff5e62)";

  }

}

updateBackground(data.weather[0].main);

function toggleTheme() {

  document.body.classList.toggle("dark");

}