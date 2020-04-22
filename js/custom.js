console.log(`Custom...`);

$(window).on("load", function () {
  console.log("Cargando...");
  $("#preload").addClass("loaded");
});

$(document).ready(function () {
  console.log("Finalizada Carga");
  $("#preload").remove();
});
