function updateCityTime() {
    let losAngeles = document.querySelector("#los-angeles");
    getCityInfo(losAngeles, "America/Los_Angeles");

    let sydney = document.querySelector("#sydney");
    getCityInfo(sydney, "Australia/Sydney");

    let mexicoCity = document.querySelector("#mex");
    getCityInfo(mexicoCity, "America/Mexico_City");

};

function getCityInfo (city, timeZone) {
    let cityDate = city.querySelector(".date");
    let currentDate = moment().format("LL");
    cityDate.innerHTML = currentDate;

    let cityTime = city.querySelector(".time");
    let currentTime = moment().tz(timeZone).format("hh:mm:ss");
    let amPm = moment().format("A");
    cityTime.innerHTML = `${currentTime} <small>${amPm}</small>`;

};



//multiple cities

function changeCity(event) {
  let cityTimeZone = event.target.value;  
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]
  let cityTimeNow = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-container");
  citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTimeNow.format("LL")}</div>
            </div>
            <div class="time">${cityTimeNow.format("hh:mm:ss")}<small> ${cityTimeNow.format("A")}</small></div>
        </div>
    
    `;
}

updateCityTime();
setInterval(updateCityTime, 1000);

let cities = document.querySelector("#city-dropdown");
cities.addEventListener("change", changeCity);
