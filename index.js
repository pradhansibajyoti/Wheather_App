let countryName="Bhubaneswar";
const apiKey="a544b908185b4af787274fd4379d3d13"
let result =document.querySelector('.res');
 async function checkWeather(countryName){
     const Wether=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&APPID=a544b908185b4af787274fd4379d3d13&units=metric`)
     const data=await Wether.json()
     console.log(data);
     result.innerHTML=
     `<div class='temp'>
     <h3>${data.name}</h3>
      <img src='/weatherApp/weather-app-img/images/clouds.png'>
      <p>${data.main.temp} &#8451;</p>
    </div>
    <div class="res1">
        <div class="res10">
          <div class="res11">
          <p>humidity</p>
          </div>
            <p>${data.main.humidity} %</p>
        </div>
        <div class="res14">
          <div class="res13"><p>windspeed</p></div>
          <p>${data.wind.speed} km/h</p>
        </div>
    </div>`;
    
 }
 
 const timeinterval=setTimeout(()=>{
    checkWeather(countryName);
 },1000)
 clearTimeout();
 document.querySelector('input[type=button]').addEventListener('click',()=>{
  let country=document.querySelector('input[type=text]').value;
    if(country!=countryName)
    {
         countryName=country;
    }
    checkWeather(countryName);

})