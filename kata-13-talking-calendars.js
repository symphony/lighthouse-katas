const talkingCalendar = function(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Store the first 4 letters of string which is the year
  const year = date.substr(0,4)
  // store the 5th and 6th index of string which is the month's number
  const monthIndex = date.substr(5, 2) - 1; // subtract 1 to start from 0
  // convert our month number to the given month name by pulling from our months array
  const month = monthNames[monthIndex];
  // store the 8th and 9th index which is the day
  let day = Number(date.substr(8, 2)); // use Number conversion to remove trailing 0

  // function that adds suffix to day
  if (day == 1) {
    day += "st";
  } else if (day == 2) {
    day += "nd";
  } else if (day == 3) {
    day += "rd";
  } else {
    day += "th";
  }

  // Combine elements into one string
  const result = month + " " + day + ", " + year;
  return result;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));