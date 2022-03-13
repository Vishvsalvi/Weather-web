let input = document.querySelector(".input");
function getData() {
  let locations = document.querySelector(".location");
  let weatherValue = document.querySelector(".weather");
  let temp = document.querySelector(".temperature");
  let dateTime = document.querySelector(".date-time");
  let humidityValue = document.querySelector(".humidity");
  let the_body = document.querySelector("body");
  let api = `http://api.weatherapi.com/v1/current.json?key=28dc47be17984ed8a0f175746220103&q=${input.value}&aqi=no`;
  fetch(api)
    .then((returnData) => {
      return returnData.json();
    })
    .then((data) => {
      console.log(data);
      let num = data.location.localtime;
      let y = Number(num.substring(11, 13))
      if (y >= 5) {
        // Morning
        the_body.style.background = "url('https://free4kwallpapers.com/uploads/wallpaper/minimalist-nature-scene-wallpaper-2560x1440-wallpaper.jpg')"
        the_body.style.backgroundSize = "cover";
        searchBtn.addEventListener("mouseover", function () {
          searchBtn.style.background = "rgb(112, 189, 233)"
        })
        searchBtn.addEventListener("mouseout",function(){
          searchBtn.style.background = "white"
        })
      }
      if (y >= 15) {
        // Evening
        the_body.style.background = "url('https://wallpaperaccess.com/full/1140733.jpg')"
        the_body.style.backgroundSize = "cover";
        searchBtn.addEventListener("mouseover", function () {
          searchBtn.style.background = "rgb(243, 78, 78)"
        })
        searchBtn.addEventListener("mouseout",function(){
          searchBtn.style.background = "white"
        })
      }
      if (y >= 19) {
      // Night
      the_body.style.background = "url('./6511747.jpg')";
        the_body.style.backgroundSize = "cover";
        searchBtn.addEventListener("mouseover", function () {
          searchBtn.style.background = "rgb(78, 130, 243)"
        })
        searchBtn.addEventListener("mouseout",function(){
          searchBtn.style.background = "white"
        })
      }

      locations.innerHTML = `<h3> Weather in ${data.location.name}</h3>`;
      temp.innerHTML = `<h1>${data.current.temp_c}°C</h1>`;
      weatherValue.innerHTML = `${data.current.condition.text} 
    `;
      dateTime.innerText = `${data.location.localtime}`;
      humidityValue.innerHTML = `Humidity: ${data.current.humidity}%`;
    });
}

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", function () {
  getData();
});