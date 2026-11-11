const yearInput = document.getElementById("yearInput");
const startBtn = document.getElementById("startBtn");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
let newYearTime;
let timer;
startBtn.addEventListener("click", function () {
    const year = Number(yearInput.value);
    if (year === 0) {
        alert("Please enter a year");
        return;
    }
    const currentYear = new Date().getFullYear();
    if (year <= currentYear) {
        alert("Please enter a future year");
        return;
    }
    newYearTime = new Date(year, 0, 1, 0, 0, 0).getTime();
    clearInterval(timer);
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
});
function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
}