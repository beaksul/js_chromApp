const api_key = "e79e43f62361d6d59e74b951cf4e1ea7";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => { // api에서 가져온 정보를 사용할 수 있게 data로 넘김
    // const weather = document.querySelector("#weather span:first-child");
    // const city = document.querySelector("#weather span:first-child");
    // city.innerText = data.name;
    // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    const {name} = data;
    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = "현재 기온 : " + Math.floor(data.main.temp) + "℃";
  });
}

function onGeoError(){
  alert('위치를 찾을 수 없어서 날씨를 표시할 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);