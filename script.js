"use strict";
let h, m, s, d;

setInterval(() => {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  document.querySelector('.clock-hour.show').innerHTML = (h < 10) ? '0' + h : h;
  document.querySelector('.clock-min.show').innerHTML = (m < 10) ? '0' + m : m;
  document.querySelector('.clock-sec.show').innerHTML = (s < 10) ? '0' + s : s;
}, 999)
