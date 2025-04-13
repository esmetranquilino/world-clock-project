function updateCityTime() {
    let losAngeles = document.querySelector("#los-angeles");
    if (losAngeles) {
        let losAngelesDate = losAngeles.querySelector(".date");
        let currentDate = moment().format("LL");
        losAngelesDate.innerHTML = currentDate;

        let losAngelesTime = losAngeles.querySelector(".time");
        let currentTime = moment()
           .tz("America/Los_Angeles")
           .format("hh:mm:ss");
        let amPm = moment().format("A");
        losAngelesTime.innerHTML = `${currentTime} <small>${amPm}</small>`;
    }
    

  //sydney
    let sydney = document.querySelector("#sydney");
    if (sydney) {
        let sydneyDate = sydney.querySelector(".date");
        let todayDate = moment().format("LL");
        sydneyDate.innerHTML = todayDate;

        let sydneyTime = sydney.querySelector(".time");
        let todayTime = moment().tz("Australia/Sydney").format("hh:mm:ss");
        let clockPeriod = moment().format("A");
        sydneyTime.innerHTML = `${todayTime} <small>${clockPeriod}</small>`;
    }
 
}

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
