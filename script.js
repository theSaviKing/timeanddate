const qs = window.location.search;
const up = new URLSearchParams(qs);
var miltime = true;
if (up.has('hour') && up.get('hour') == 12 || up.has('ampm') || up.has('12hour')) {
    miltime = false;
}

/**********/

const d = new Date()
const dotw = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById("date").innerHTML = `${dotw[d.getDay()]} &mdash; <span class="font-semibold">${d.getDate()} ${months[d.getMonth()]}</span> ${d.getFullYear()}`

/**********/

function getTime24() {
    const t = new Date();
    document.getElementById("hours").textContent = t.getHours()
    document.getElementById("minutes").textContent = String(t.getMinutes()).padStart(2, "0")
    document.getElementById("seconds").textContent = String(t.getSeconds()).padStart(2, "0")
}

function getTime12() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
}
var getTime = miltime ? getTime24 : getTime12
getTime()
setInterval(getTime, 500);