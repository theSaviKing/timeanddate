const qs = window.location.search;
const up = new URLSearchParams(qs);
var miltime = true;
if (up.has('hour') && up.get('hour') == 12) {
    miltime = false;
}

/**********/

const d = new Date()
const dotw = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById("date").innerHTML = `${dotw[d.getDay()]} &mdash; <span class="font-semibold">${d.getDate()} ${months[d.getMonth()]}</span> ${d.getFullYear()}`

/**********/

function getTime() {
    const t = new Date();
    if (!miltime && t.getHours() > 12) {
        document.getElementById("hours").textContent = t.getHours() - 12
    } else {
        document.getElementById("hours").textContent = t.getHours()
    }
    document.getElementById("minutes").textContent = String(t.getMinutes()).padStart(2, "0")
    document.getElementById("seconds").textContent = String(t.getSeconds()).padStart(2, "0")
    if (!miltime) {
        if (t.getHours() > 12) {
            document.getElementById("seconds").textContent += " AM"
        } else {
            document.getElementById("seconds").textContent += " PM"
        }
    }
}
getTime()
setInterval(getTime, 500);