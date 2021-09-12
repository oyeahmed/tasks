// Submit this test via GitHub
// Create a timer ⏱  it’ll start from 25 to 0 (downward).
// in which background color of screen will be black at 20 ,
// At 10 it’ll be yellow and and at 5 it’ll be white
// In both tasks develper have to use same approach for plus point.
// Otherwise one these tasks should be completed using functional.
// Both class based will not be accepted

let countDownDate = new Date("Sept 14, 2022 12:00:00").getTime();

document.querySelector("#start").addEventListener("click", () => {
  setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for seconds
    let seconds = Math.floor((distance % (1000 * 26)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = seconds + "s ";

    if (seconds == 20) {
      document.querySelector(".background").style.backgroundColor = "black";
    }
    if (seconds == 10) {
      document.querySelector(".background").style.backgroundColor = "yellow";
    }
    if (seconds == 5) {
      document.querySelector(".background").style.backgroundColor = "white";
    }
  }, 1000);
});
