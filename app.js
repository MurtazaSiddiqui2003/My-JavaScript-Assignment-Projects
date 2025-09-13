checkWeather = async () => {
    const background = document.getElementById("body");
    const city = document.getElementById("city").value;
    const weatherinfo = document.getElementById("weather")
    const apiKey = "2f72516b13a2d95faebd1208575786a6"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    
    if (city == "") {
        alert("Please Enter A City Name");
        return;
    }
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data)
        if (data.cod == '404') {
            weatherinfo.innerHTML = `<p>We're Sorry! Your Mentioned City "${city}" Not Found </p>`
        }
        else {
            weatherinfo.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: 🌡️${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Sky: ☁️ ${data.weather[0].description}</p>
            <p>Wind Speed: 💨 Wind: ${data.wind.speed} m/s</p>
            `;
            if (data.main.temp <= 9) {
                background.style.backgroundImage = "url('./Assets/9.jpg')";
            }
            else if (data.main.temp <= 19) {
                background.style.backgroundImage = "url('./Assets/19.jpg')";
            }
            else if (data.main.temp <= 29) {
                background.style.backgroundImage = "url('./Assets/29.jpg')";
            }
            else if (data.main.temp <= 39) {
                background.style.backgroundImage = "url('./Assets/39.jpg')";
            }
            else if (data.main.temp <= 49) {
                background.style.backgroundImage = "url('./Assets/49.jpg')";
            }
            else if (data.main.temp >= 49) {
                background.style.backgroundImage = "url('./Assets/50+.jpg')";
            }
        }
    }
    catch (err) {
        weatherinfo.innerHtml = `<p>Error Fetching</p>`
        console.log(`Something Went Wrong`)
    }
}

