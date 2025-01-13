const apiKey = "1fe8da4bb82befd79744f7508d12011d";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');
        const weatherIcon = document.querySelector('.weather-icon');

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404) {
                document.querySelector('.err').style.display = "block";
                document.querySelector('.weather').style.display = "none";
                return;
            }else {
                var data =await response.json();
            console.log(data);
            document.querySelector('.city').innerText = data.name;
            document.querySelector('.temp').innerText = Math.round(data.main.temp) + "°c";
            document.querySelector('.humidity').innerText = data.main.humidity + "%";
            document.querySelector('.Wind').innerText = data.wind.speed + "kmph";

            if(data.weather[0].main == "Clouds") {
                document.querySelector('.weather-icon').src = "images/clouds.png";
            } else if(data.weather[0].main == "Rain") {
                document.querySelector('.weather-icon').src = "images/rain.png";
            } else if(data.weather[0].main == "Clear") {
                document.querySelector('.weather-icon').src = "images/clear.png";
            } else if(data.weather[0].main == "Mist") {
                document.querySelector('.weather-icon').src = "images/mist.png";
            } else if(data.weather[0].main == "Snow") {
                document.querySelector('.weather-icon').src = "images/snow.png";
            } else if(data.weather[0].main == "Drizzel") {
                document.querySelector('.weather-icon').src = "images/drizzel.png";
            }
            document.querySelector('.err').style.display = "none";
            document.querySelector('.weather').style.display = "block";
            } 

        }
        searchBtn.addEventListener('click', () => {
            checkWeather(searchBox.value);
        });