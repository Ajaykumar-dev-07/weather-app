

const apiKey="b86143c3fdbb0260b5992468257c9956";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBar=document.querySelector(".search input");
var searchBtn=document.querySelector(".search button");
var weatherIcon=document.querySelector(".weather-img");


async function getWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".humidity .value").innerHTML=0 +"%";
        document.querySelector(".wind .value").innerHTML=0 +" km/h";
    }
    else{
        var Data=await response.json();
        console.log(Data);
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        
    
   

document.querySelector(".temp").innerHTML=Math.round(Data.main.temp )+"°C";
document.querySelector(".city").innerHTML=Data.name;
document.querySelector(".humidity .value").innerHTML=Data.main.humidity +"%";
document.querySelector(".wind .value").innerHTML=Data.wind.speed +" km/h";
document.querySelector(".description").innerHTML=Data.weather[0].description;
 
if(Data.weather[0].main=="Clouds"){
    document.querySelector(".weather-img").src="images/clouds.png";
    document.querySelector(".card").style.background = "linear-gradient(145deg,	#eef2f5,#ebf1f5,#dee8ef,#d6e4ed	#d0e2ed)";
    document.querySelectorAll(".card, .city, .temp, .humidity, .wind, .description").forEach(element => element.style.color = "black");
   
}
else if(Data.weather[0].main=="Clear"){
    document.querySelector(".weather-img").src="images/clear.png";
    document.querySelector(".card").style.background = "linear-gradient(145deg, #87CEEB, #00BFFF)";  
}
else if(Data.weather[0].main=="Rain"){
    document.querySelector(".weather-img").src="images/rain.png";
    document.querySelector(".card").style.background = "linear-gradient(145deg, #5F9EA0, #4682B4)";
}
else if(Data.weather[0].main=="Snow"){
    document.querySelector(".weather-img").src="images/snow.png";
    document.querySelector(".card").style.background = "linear-gradient(145deg, #F0F8FF, #FFFFFF, #E6E6FA)";
}
else if(Data.weather[0].main=="Mist"){
    document.querySelector(".weather-img").src="images/mist.png";
    document.querySelector(".card").style.background = "linear-gradient(145deg, #B3C1C9, #D3D3D3)";
}
else if(Data.weather[0].main=="Haze"){
    document.querySelector(".weather-img").src="images/mist.png";
    document.querySelector(".card").style.background = "linear-gradient(145deg, #A9A9A9, #C0C0C0, #E0E0E0)";
}
else if(Data.weather[0].main=="Drizzle"){
    document.querySelector(".weather-img").src="images/drizzle.png";
    document.querySelector(".card").style.background = "linear-gradient(145deg, #A1B3C1, #738A94)";

}
else if(Data.weather[0].main=="Thunderstorm"){
    document.querySelector(".weather-img").src="images/thunderstorm.gif";
  
    document.querySelectorAll(".card, .city, .temp, .humidity, .wind, .description").forEach(element => element.style.color = "black");

}

}
}

searchBtn.addEventListener("click",()=>{
    getWeather(searchBar.value);
    document.querySelector(".details").style.display="block";
});


