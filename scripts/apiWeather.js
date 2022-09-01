const divWeather = document.getElementById("divWtr")
const API_KEY = "b70f5df831f83a9536bfa74601dccefb";

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Buenos Aires,caba,Argentina&limit=1&appid=${API_KEY}`)
.then(response => response.json())
.then(data => {
    const {lat, lon, state, country, name} = data[0]

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(({main}) => {
        divWeather.innerHTML = `<div style="color: white; text-align:right ">
                                <p>${name}, CABA, ${country} - T: ${main.temp} °C - ST:  ${main.feels_like} °C </p>
                             </div> `
    })
})