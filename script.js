"use strict";
let h, m, s, d, p, dy;
const days = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"]

setInterval(() => {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  dy = d.getDay();
  p = (h > 12) ? "PM" : "AM";
  h = (h > 12) ? h - 12 : h;
  document.querySelector('.clock-hour.show').innerHTML = (h < 10) ? '0' + h : h;
  document.querySelector('.clock-min.show').innerHTML = (m < 10) ? '0' + m : m;
  document.querySelector('.clock-sec.show').innerHTML = (s < 10) ? '0' + s : s;
  document.querySelector('.clock-period.show').innerHTML = p;
  document.querySelector('.clock-day.show').innerHTML = days[dy];
}, 999)
