/*menu despegable*/

document.querySelector(".bars__menu").addEventListener("click", animateBars);
const nav = document.querySelector(".nav");

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

  nav.classList.toggle("activo");
}

/* Cuando hago CLICK en .bars__menu, .nav agrega TOGGLE 'activo'*/
/*
const button = document.querySelector(".bars__menu");
const nav = document.querySelector(".nav");

nav.classList.toggle("activo");
*/
