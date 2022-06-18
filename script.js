const secondHand = document.querySelector(".hand-seconds");
const hourHand = document.querySelector(".hand-hours");
const minuteHand = document.querySelector(".hand-minutes");
function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360 - 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  const min = now.getMinutes();
  const minDegrees = (min / 60) * 360 - 90;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 - 90 + (min / (12 * 60)) * 360;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
document
  .getElementsByClassName("theme-selector")[0]
  .addEventListener("click", switchToDarkMode);
function switchToDarkMode() {
  let mode = document.getElementsByClassName("theme-selector")[0].textContent;
  if (mode == "dark_mode") {
    document.getElementsByClassName("clock-face")[0].style.backgroundImage =
      'url("./images/black.png")';
    document.getElementsByClassName("hand-hours")[0].style.border =
      "4px solid white";
    document.getElementsByClassName("hand-minutes")[0].style.border =
      "3px solid white";
    document.getElementsByClassName("hand-seconds")[0].style.border =
      "2px solid white";
    document.getElementsByClassName("theme-selector")[0].textContent =
      "light_mode";
    document
      .getElementsByClassName("theme-selector")[0]
      .addEventListener("mouseover", function () {
        document.getElementsByClassName("text")[0].textContent =
          "Switch To Light Mode";
        document.getElementsByClassName("text")[0].style.backgroundColor =
          "black";
        document.getElementsByClassName("text")[0].style.color = "white";
      });
    document
      .getElementsByClassName("theme-selector")[0]
      .addEventListener("mouseout", function () {
        document.getElementsByClassName("text")[0].textContent = "";
      });
  } else if (mode == "light_mode") {
    document.getElementsByClassName("clock-face")[0].style.backgroundImage =
      'url("./images/white.png")';
    document.getElementsByClassName("hand-hours")[0].style.border =
      "4px solid black";
    document.getElementsByClassName("hand-minutes")[0].style.border =
      "3px solid black";
    document.getElementsByClassName("hand-seconds")[0].style.border =
      "2px solid black";
    document.getElementsByClassName("theme-selector")[0].textContent =
      "dark_mode";
    document
      .getElementsByClassName("theme-selector")[0]
      .addEventListener("mouseover", function () {
        document.getElementsByClassName("text")[0].textContent =
          "Switch To Dark Mode";
        document.getElementsByClassName("text")[0].style.backgroundColor =
          "black";
        document.getElementsByClassName("text")[0].style.color = "white";
      });
    document
      .getElementsByClassName("theme-selector")[0]
      .addEventListener("mouseout", function () {
        document.getElementsByClassName("text")[0].textContent = "";
      });
  }
}
