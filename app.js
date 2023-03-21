// varibale for watch
const time = document.querySelector(".time");
const play = document.querySelector("#play-btn");
const reset = document.querySelector("#reset-btn");

let sec = 0;
let min = 0;
let hr = 0;

//variables for time value
let leadingsec = 0;
let leadingmin = 0;
let leadinghr = 0;

// variables for set interval &timestatus

let timeInterval = null;
let timeStatus = "stopped";
function stopWatch() {
  sec++;
  if (sec / 60 === 1) {
    sec = 0;
    min++;

    if (min / 60 === 1) {
      min = 0;
      hr++;
    }
  }
  if (sec < 10) {
    leadingsec = "0" + sec;
  } else {
    leadingsec = sec;
  }

  if (min < 10) {
    leadingmin = "0" + min;
  } else {
    leadingmin = min;
  }
  if (sec < 10) {
    leadinghr = "0" + hr;
  } else {
    leadinghr = hr;
  }
  let displayTime = (document.querySelector(".time").innerText =
    leadinghr + ":" + leadingmin + ":" + leadingsec);
}

play.addEventListener("click", function () {
  if (timeStatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "play-btn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timeStatus = "started";
  } else {
    window.clearInterval(timeInterval);
    document.getElementById(
      "play-btn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timeStatus = "stopped";
  }
});

//reset btn
reset.addEventListener("click", function () {
  window.clearInterval(timeInterval);
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById(
    "play-btn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timeStatus = "stopped";
  time.innerText = "00:00:00";
});
