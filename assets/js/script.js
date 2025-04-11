let name1 = document.getElementById("name");
let forecast = document.getElementById("forecast");
let celcius = document.getElementById("celcius");
let weatherIcon = document.getElementById("weatherIcon");
let min = document.getElementById("min");
let max = document.getElementById("max");
let feel = document.getElementById("realFeel");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let pressure = document.getElementById("pressure");

document.getElementById("search").addEventListener("click", () => {
    let ctName = document.getElementById("search-ct").value;

    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${ctName}&units=metric&appid=a3000df93c44a85630b3e59a17168a0a`;

    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            
            if (res.cod !== 200) {
                name1.innerHTML = res.message;
                forecast.innerHTML = "";
                celcius.innerHTML = "";
                weatherIcon.src = "";
                min.innerHTML = "";
                max.innerHTML = "";
                feel.innerHTML = "";
                humidity.innerHTML = "";
                wind.innerHTML = "";
                pressure.innerHTML = "";
                return;
            }

            name1.innerHTML = res.name;

            forecast.innerHTML = res.weather[0].main;
            celcius.innerHTML = res.main.temp + "&#176C";
            min.innerHTML = res.main.temp_max + "&#176C";
            max.innerHTML = res.main.temp_min + "&#176C";
            let icon = res.weather[0].icon;
            weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            feel.innerHTML = res.main.feels_like + "&#176";
            humidity.innerHTML = res.main.humidity + "&#176";
            pressure.innerHTML = res.main.pressure;
            wind.innerHTML = res.wind.gust;
        })
})