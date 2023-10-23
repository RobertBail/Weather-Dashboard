let searchinput = document.querySelector('#location');
let button = document.getElementById('searchbutton');


button.addEventListener('click', function(){
getWeather()});
 

 function getWeather(){
 fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchinput.value+"&units=metric&appid=da82657bac27586df572d5d5edb91ad0")
  .then(function(response){
    return response.json();
  })
  
  .then (function (response){
    
    console.log(response);
    
    const section = document.querySelector('.displayweather');
    const weatherdiv = document.createElement('div');
    const cityname = document.createElement('h2');
    cityname.innerText = searchinput.value;
    
    const date1 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= response.list[4].dt_txt};
    date1.innerText = response.list[4].dt_txt;

    const temp1 = document.createElement('h2');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[4].main.temp)};
    temp1.innerText = Number(response.list[4].main.temp)+ "°C";

    const humidity1 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[4].main.humidity)};
    humidity1.innerText = "Humidity: " + Number(response.list[4].main.humidity)+ "%";

    const wind1 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[4].wind.speed)};
    wind1.innerText = "Wind: " + Number(response.list[4].wind.speed)+ "km/h";

    const date2 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= response.list[12].dt_txt};
    date2.innerText = response.list[12].dt_txt;

    const temp2 = document.createElement('h2');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[12].main.temp)};
    temp2.innerText = Number(response.list[12].main.temp)+ "°C";

    const humidity2 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[12].main.humidity)};
    humidity2.innerText = "Humidity: " + Number(response.list[12].main.humidity)+ "%";
    
    const wind2 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[12].wind.speed)};
    wind2.innerText = "Wind: " + Number(response.list[12].wind.speed)+ "km/h";
    

    weatherdiv.appendChild(cityname);
    weatherdiv.appendChild(date1);
    weatherdiv.appendChild(temp1);
    weatherdiv.appendChild(humidity1);
    weatherdiv.appendChild(wind1);
   
    weatherdiv.appendChild(date2);
    weatherdiv.appendChild(temp2);
    weatherdiv.appendChild(humidity2);
    weatherdiv.appendChild(wind2);
    section.appendChild(weatherdiv);
 })
 savelocation();
}

function savelocation(){
console.log(searchinput.value);
localStorage.setItem("location", JSON.stringify(searchinput));
JSON.parse(localStorage.getItem("location"));
document.getElementById("savelocation").textContent = searchinput.value;
}

