"use strict";
//Init weather object
const weather = new Weather('Roma', 'IT');
const ui = new UI;

//Get Weather on DOMLoad
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
    weather.getWeather()
    .then(result => {
        ui.paint(result);
    })
    .catch(error => console.log(error));
}
