function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind"); 
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humiidty;
    windElement.innerHTML = Math.round(response.data.wind.speed);

}




let apiKey = "196f4ddac8abc59085a4e103c51df6af";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);