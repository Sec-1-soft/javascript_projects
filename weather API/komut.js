const searchBar = document.getElementById("weather_search_bar");
let searchIcon = document.getElementById("weather_search_icon");
let dataLocation = document.getElementById("weather_data_location");
let dataTemp = document.getElementById("weather_data_temp");
let dataCloud = document.getElementById("weather_data_cloud");
let dataWind = document.getElementById("weather_data_wind");
let dataRain = document.getElementById("weather_data_rain");


searchIcon.onclick=function(){

const API_KEY = 'b4a15e61a38bf9baccab001eb1dd1f4d';
let CITY = searchBar.value.toUpperCase();
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&lang=tr`;

fetch(apiUrl)

.then(response =>response.json())
.then(data =>{
    dataLocation.innerHTML = CITY;
    dataTemp.innerHTML = kelvinToCelsius(data.main.temp);
    dataCloud.innerHTML = data.clouds.all+" "+"%"+data.weather[0].description;
    dataWind.innerHTML = data.wind.speed+" "+"m/s";
})}

function kelvinToCelsius(kelvin) {  //kelvin santigrat çevirme fonksiyonu
    return (kelvin - 273.15).toFixed(1)+"°C";
     }