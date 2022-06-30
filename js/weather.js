const API_KEY = "7559b59b78546c7cc2a258efb4e982d8";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log("You live it", lat, log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);