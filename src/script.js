$(window).on("load", function(){
    $('.load-wraper').fadeOut("slow");
});

document.getElementById("btn1").onclick = function() {
    $('.load-wraper').fadeIn("slow")
}

document.getElementById("preload").onclick = function() {
    $(".load-wraper").fadeOut("slow")
}
// -------------------------------------------------------

setInterval(() => {
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let miliseconds = document.getElementById("miliseconds")
let ampm = document.getElementById("ampm")

let hh = document.getElementById("hh");
let mm = document.getElementById('mm');
let ss = document.getElementById("ss")
let msms = document.getElementById('msms')

let h_dot = document.querySelector('.h_dot')
let m_dot = document.querySelector('.m_dot')
let s_dot = document.querySelector('.s_dot')
let ms_dot = document.querySelector('.ms_dot')

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ms = new Date().getMilliseconds() / 10;
let am = h >= 12 ? "PM" : "AM";

if (h > 12) {
    h = h -12
}

ms = Math.round(ms)

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
ms = (ms < 10) ? "0" + ms : ms;

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
miliseconds.innerHTML = ms;
ampm.innerHTML = am

hh.style.strokeDashoffset = 440 - (440 * h) / 12;
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
ss.style.strokeDashoffset = 440 - (440 * s) / 60;
msms.style.strokeDashoffset = 440 - (440 * ms) / 100;

h_dot.style.transform = `rotate(${h * 30}deg)`
m_dot.style.transform = `rotate(${m * 6}deg)`
s_dot.style.transform = `rotate(${s * 6}deg)`
ms_dot.style.transform = `rotate(${ms * 3.6}deg)`

;})