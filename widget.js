function update() {
    var days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var a = new Date();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = days[a.getDay()];
    var hour = a.getHours().toString().padStart(2, "0");
    var min = a.getMinutes().toString().padStart(2, "0");;
    document.getElementById("time-text").innerHTML = hour+" "+min
    document.getElementById("day-text").innerHTML = day+", "+month+" "+date
    console.log(day+","+month+" "+date);
    setTimeout(update(),2000);
}

function updweather() {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=55.6765256&lon=13.0849851&appid=3ab048a5dff57c50e864e1484411f691",
        function (weatherData, textStatus, jqXHR) {
        const icon = document.getElementById("weather-icon")
        const temp = document.getElementById("temp")
        icon.src = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@4x.png"
        temp.innerHTML=Math.round(weatherData.main.temp - 273.15)+"°C"
    });
   document.getElementById("location").innerHTML = "Lomma, Sweden"
}

function errorCallback(error) {
    document.getElementById("temp").innerHTML="error"
  }
document.getElementById("elcard").onclick = function(){window.open("https://www.elprisetjustnu.se/i/malmo?mode=embed&layout=minimal&hide-examples=1&zoom=1.2&background=ffffff", "_blank");};

updweather()
update()