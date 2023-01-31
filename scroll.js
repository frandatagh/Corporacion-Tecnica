let $barracontacto = document.querySelector("#barra-contacto");

window.addEventListener("scroll", function () {
  let ubicacionActual = window.pageYOffset;
  console.log(ubicacionActual);

  if (ubicacionActual > 0) {
    $barracontacto.style.top = "-18px";
  } else {
    $barracontacto.style.top = "0px";
  }
});
