function formatDate (timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
     if (hours < 10){
        hours = '0${hours}';
    }
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes = '0${minutes}';
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
}



function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind"); 
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySeletor("#icon");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humiidty;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute = ("src", 'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png');

    iconElement.setAttribute = ("alt", response.data.weather[0].description);
    

}




let apiKey = "196f4ddac8abc59085a4e103c51df6af";
let city = "New York"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);