const cityInput = document.querySelector(".search-btn");
const searchButton = document.querySelector(".search-btn");

const API_KEY ="47c87ece2cf180db7119b858d154af4c"; // API key for OpenWeatherMap API

const getWeatherDetails = () => (cityName,late,lon) => {
    const cityName = cityInput.ariaValueMax.trim(); // Get user entered city name and remove extra spaces
}


if(!cityName)return; // Return if cityName is empty
    const GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit+1&appid=${API_KEY}';

     fetch(GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&app:')

     fetch(GEOCODING_API_URL).then(res => res.json()).then(data =>{
        console.log(data)
}).catch(() => {
    alert("An error.occur while fetching coorinates!");
});
}      

searchbutton.addEventListener("click",getCityCoordinates);
