console.log(`Custom...`);

$(window).on("load", function () {
  console.log("Cargando...");
  $("#preload").addClass("loaded");
});

$(document).ready(() => {
  console.log("Finalizada Carga");

  $("#preload").remove();

  var positionFade = $(".elemento").position();
  console.log(positionFade.top);
  console.log($(window).height());

  $(window).scroll(() => {
    //console.log(window.scrollY);
    if (this.scrollY + $(this).height() > positionFade.top) {
      console.log("Ahora");
    }
  });
  //
});

/* -- Fade In -- */
