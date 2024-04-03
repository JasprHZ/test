// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
  // Getting current time and date
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let month = time.getMonth();
  date = time.getDate();
  //



  //
  //getting current weekday begin
  const weekday = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

  const d = new Date();
  let day = weekday[d.getDay()];
  //end
  //



  // Setting time for 12 Hrs format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }
  //



  //getting month start
  if (month == 0) {
    montha = "January";
  }
  if (month == 1) {
    montha = "February";
  }
  if (month == 2) {
    montha = "March";
  }
  if (month == 3) {
    montha = "April";
  }
  if (month == 4) {
    montha = "May";
  }
  if (month == 5) {
    montha = "June";
  }
  if (month == 6) {
    montha = "July";
  }
  if (month == 7) {
    montha = "August";
  }
  if (month == 8) {
    montha = "September";
  }
  if (month == 9) {
    montha = "October";
  }
  if (month == 10) {
    montha = "November";
  }
  if (month == 11) {
    montha = "December";
  }
  //



  //
  hour =
    hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  //



  let currentTime =
    hour +
    ":" +
    min +
    am_pm;

  let currentDay =
    day;

  let currentMonth =
    montha;

  let currentDate =
    date;


  // Giving info to html
  document.getElementById(
    "CurrentTime"
  ).innerHTML = currentTime;

  document.getElementById(
    "CurrentDay"
  ).innerHTML = currentDay;

  document.getElementById(
    "CurrentMonth"
  ).innerHTML = currentMonth;

  document.getElementById(
    "CurrentDate"
  ).innerHTML = currentDate;
  // end

}

showTime();
