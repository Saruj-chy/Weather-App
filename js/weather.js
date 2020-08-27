// const place_input = document.getElementById('place-input').value;
const search_btn = document.getElementById('search-btn');


search_btn.addEventListener('click', function () {
  const place_input = document.getElementById('place-input').value;
  console.log(place_input);
  searchWeather(place_input);

})

function searchWeather(cityName) {
  const Weather_Api = '1cf29e87d01ac4e7830432a09e6e3238';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Weather_Api}`;
  fetch(url).then(res => res.json())
    .then(data => {
      setWeatherDetails(data);
    })
}

function setWeatherDetails(data) {
  // console.log(data);

  const text_cityName = document.getElementById('text-city-name');
  const text_temp = document.getElementById('text-temp');
  const text_cloud = document.getElementById('text-cloud');

  const temp = (data.main.temp - 273).toFixed(2);
  const see_level = data.main.sea_level;
  const wind_speed = data.wind.speed;


  text_cityName.innerText = `${data.name}, ${data.sys.country}`;
  text_temp.innerText = temp;
  text_cloud.innerText = `${data.weather[0].main} 
                          \n Sea Level: ${see_level} \nWind Speed: ${wind_speed}`;



}