"use strict";
//Init weather object
const weather = new Weather('Roma', 'IT');

//Get Weather on DOMLoad
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
    weather.getWeather()
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));
}
