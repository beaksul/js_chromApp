const api_key = "e79e43f62361d6d59e74b951cf4e1ea7";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:first-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert('위치를 찾을 수 없어서 날씨를 표시할 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);