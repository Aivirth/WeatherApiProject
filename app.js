"use strict";
//Init Storage object
const storage = new Storage;
const weatherLocation = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI object
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


//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);

    //Get weather and display it
    getWeather();
    $('#locModal').modal('hide');
});