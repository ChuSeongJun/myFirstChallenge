const nowTime = document.querySelector(".clock");
const clock1 = document.querySelector(".clock1");
const clock2 = document.querySelector(".clock2");

function time() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth() + 1;
    const todayDate = now.getDate();
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const whatDayIsToday = week[now.getDay()];
    clock1.innerText = `${todayYear}. ${todayMonth}. ${todayDate}. ${whatDayIsToday}`;
    clock2.innerText = `${hour}: ${minute}: ${second}`;
}

time();
setInterval(time, 1000);
