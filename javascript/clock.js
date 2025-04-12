function updateCityTime () {
    //LA
    let losAngeles = document.querySelector("#los-angeles");
    let losAngelesDate = losAngeles.querySelector(".date");
    let currentDate = moment().format("LL");
    losAngelesDate.innerHTML = currentDate;

    let losAngelesTime = losAngeles.querySelector(".time");
    let currentTime = moment()
        .tz("America/Los_Angeles")
        .format("hh:mm:ss");
    let amPm = moment().format("A")
    losAngelesTime.innerHTML = `${currentTime} <small>${amPm}</small>`


    //sydney
    let sydney = document.querySelector("#sydney");
    let sydneyDate = sydney.querySelector(".date");
    let todayDate = moment().format("LL");
    sydneyDate.innerHTML = todayDate;

    let sydneyTime = sydney.querySelector(".time");
    let todayTime = moment().tz("Australia/Sydney").format("hh:mm:ss");
    let clockPeriod = moment().format("A");
    sydneyTime.innerHTML = `${todayTime} <small>${clockPeriod}</small>`;
}; 

updateCityTime();
setInterval(updateCityTime, 1000);




