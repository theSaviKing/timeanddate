const d = new Date()
const dotw = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById("date").innerHTML = `${dotw[d.getDay()]} &mdash; <span class="font-semibold">${d.getDate()} ${months[d.getMonth()]}</span> ${d.getFullYear()}`

/**********/

function getTime() {
    const t = new Date();
    document.getElementById("hours").textContent = t.getHours()
    document.getElementById("minutes").textContent = String(t.getMinutes()).padStart(2, "0")
    document.getElementById("seconds").textContent = String(t.getSeconds()).padStart(2, "0")
}
getTime()
setInterval(getTime, 500);