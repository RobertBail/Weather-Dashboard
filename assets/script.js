let searchinput = document.querySelector('.location');
let button = document.getElementById('searchbutton');
//let, var differences in 9, try var? var you can access outside a function?

button.addEventListener('click', function (){
getWeather();
savelocation();
});

function savelocation(){
  console.log(searchinput.value);

  localStorage.setItem(".location", JSON.stringify(searchinput));
  var savedlocation = JSON.parse(localStorage.getItem(".location"));
  document.createElement("h3")
  savedlocation.innerText = searchinput.value;
  document.querySelector(".savelocation").append(searchinput.value + ". ");
   
}


 function getWeather(){
  fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchinput.value+"&units=metric&appid=da82657bac27586df572d5d5edb91ad0")
  .then(function(response){
    return response.json();
  })
  
  .then (function (response){
    
    console.log(response);
    
    var weatherarea = document.querySelector('.displayweather');
   
    var weatherdiv1 = document.querySelector('.weatherinfo1');
    var icon1 = document.querySelector('.weathericon1').src = `http://openweathermap.org/img/w/${response.list[4].weather[0].icon}.png`;
    var weatherdiv2 = document.querySelector('.weatherinfo2');
    var icon2 = document.querySelector('.weathericon2').src = `http://openweathermap.org/img/w/${response.list[12].weather[0].icon}.png`;
    var weatherdiv3 = document.querySelector('.weatherinfo3');
    var icon3 = document.querySelector('.weathericon3').src = `http://openweathermap.org/img/w/${response.list[20].weather[0].icon}.png`;
    var weatherdiv4 = document.querySelector('.weatherinfo4');
    var icon4 = document.querySelector('.weathericon4').src = `http://openweathermap.org/img/w/${response.list[28].weather[0].icon}.png`;
    var weatherdiv5 = document.querySelector('.weatherinfo5');
    var icon5 = document.querySelector('.weathericon5').src = `http://openweathermap.org/img/w/${response.list[36].weather[0].icon}.png`;
    
    var cityname = document.querySelector('.cityname');
    cityname.innerText = searchinput.value;

    var date1 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= response.list[4].dt_txt};
    date1.innerText = "Today: " + response.list[4].dt_txt;
    //.format for date? day and date from road trip assistant?
    
    var temp1 = document.createElement('h2');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[4].main.temp)};
    temp1.innerText = Number(response.list[4].main.temp)+ "°C";

    var humidity1 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[4].main.humidity)};
    humidity1.innerText = "Humidity: " + Number(response.list[4].main.humidity)+ "%";

    var wind1 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[4].wind.speed)};
    wind1.innerText = "Wind: " + Number(response.list[4].wind.speed)+ "km/h";

    
    var date2 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= response.list[12].dt_txt};
    date2.innerText = "Tomorrow: " + response.list[12].dt_txt;

    var temp2 = document.createElement('h2');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[12].main.temp)};
    temp2.innerText = Number(response.list[12].main.temp)+ "°C";

    var humidity2 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[12].main.humidity)};
    humidity2.innerText = "Humidity: " + Number(response.list[12].main.humidity)+ "%";
    
    var wind2 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[12].wind.speed)};
    wind2.innerText = "Wind: " + Number(response.list[12].wind.speed)+ "km/h";


    var date3 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= response.list[20].dt_txt};
    date3.innerText = response.list[20].dt_txt;

    var temp3 = document.createElement('h2');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[20].main.temp)};
    temp3.innerText = Number(response.list[20].main.temp)+ "°C";

    var humidity3 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[20].main.humidity)};
    humidity3.innerText = "Humidity: " + Number(response.list[20].main.humidity)+ "%";

    var wind3 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[20].wind.speed)};
    wind3.innerText = "Wind: " + Number(response.list[20].wind.speed)+ "km/h";


    var date4 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= response.list[28].dt_txt};
    date4.innerText = response.list[28].dt_txt;

    var temp4 = document.createElement('h2');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[28].main.temp)};
    temp4.innerText = Number(response.list[28].main.temp)+ "°C";

    var humidity4 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[28].main.humidity)};
    humidity4.innerText = "Humidity: " + Number(response.list[28].main.humidity)+ "%";

    var wind4 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[28].wind.speed)};
    wind4.innerText = "Wind: " + Number(response.list[28].wind.speed)+ "km/h";


    var date5 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= response.list[36].dt_txt};
    date5.innerText = response.list[36].dt_txt;

    var temp5 = document.createElement('h2');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[36].main.temp)};
    temp5.innerText = Number(response.list[36].main.temp)+ "°C";

    var humidity5 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[36].main.humidity)};
    humidity5.innerText = "Humidity: " + Number(response.list[36].main.humidity)+ "%";

    var wind5 = document.createElement('p');
    for(i=0;i<40;i++){((i+1)).innerText= Number(response.list[36].wind.speed)};
    wind5.innerText = "Wind: " + Number(response.list[36].wind.speed)+ "km/h";
  
  
    weatherdiv1.appendChild(date1);
    weatherdiv1.appendChild(temp1);
    weatherdiv1.appendChild(humidity1);
    weatherdiv1.appendChild(wind1);
  
    weatherdiv2.appendChild(date2);
    weatherdiv2.appendChild(temp2);
    weatherdiv2.appendChild(humidity2);
    weatherdiv2.appendChild(wind2);
  
    weatherdiv3.appendChild(date3);
    weatherdiv3.appendChild(temp3);
    weatherdiv3.appendChild(humidity3);
    weatherdiv3.appendChild(wind3);

    weatherdiv4.appendChild(date4);
    weatherdiv4.appendChild(temp4);
    weatherdiv4.appendChild(humidity4);
    weatherdiv4.appendChild(wind4);

    weatherdiv5.appendChild(date5);
    weatherdiv5.appendChild(temp5);
    weatherdiv5.appendChild(humidity5);
    weatherdiv5.appendChild(wind5);


    weatherarea.appendChild(weatherdiv1); 
    weatherarea.appendChild(weatherdiv2);
    weatherarea.appendChild(weatherdiv3);
    weatherarea.appendChild(weatherdiv4);
    weatherarea.appendChild(weatherdiv5);

    weatherdiv1.appendChild(icon1);
    weatherdiv2.appendChild(icon2);
    weatherdiv3.appendChild(icon3);
    weatherdiv4.appendChild(icon4);
    weatherdiv5.appendChild(icon5);
   

    weatherarea.appendChild(cityname);
    
 })
 
}

