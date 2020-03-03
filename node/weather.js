const axios = require("axios");
const inquirer = require("inquirer");

function loadWeather(city) {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=92069bf957d02bc300f09ef3edd27e75&fbclid=IwAR1MYWg20Z7gggNPMa-ea7PhNn2FQHNQRJ4r_Ja3wzMwwN2LTDUmSq2-K6Y`
  );
}

inquirer
  .prompt([
    {
      type: "input",
      name: "city",
      message: "What is your city?"
    }
  ])
  .then(function(answers) {
    const city = answers.city;
    return loadWeather(city);
  })
  .then(function(response) {
    const temp = response.data.main.temp;
    const condition = response.data.weather[0].main;
    const windSpeed = response.data.wind.speed;
    const city = response.data.name;
    const message = `In ${city} there are ${temp} celsius. The condition is ${condition}, 
      and the wind speed is ${windSpeed}.`;

    console.log(message);
  });
