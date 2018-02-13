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


//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation('Miami', 'FL');

    //Get weather and display it
    getWeather();
    $('#locModal').modal('hide');
});