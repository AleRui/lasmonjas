console.log(`Custom...`);

$(window).on("load", function () {
  console.log("Cargando...");
  $("#preload").addClass("loaded");
});

/* Back to Top */

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("#back-to-top").data;
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  //if $("#back-to-top").css
  if ($("#back-to-top").is(":visible")) {
    $("#back-to-top").tooltip("show");
  }
});


/* Fade In elements on Scroll */

$(document).ready(() => {
  console.log("Finalizada Carga");
  $("#preload").remove();

  //const elemento = $(".elemento");
  //const elementoPosition = elemento.position().top;
  //console.log(elemento);
  //console.log(elementoPosition);
  //
  //$(window).scroll(() => {
  //  console.log("Scrolling");
  //  //if ($(this).scrollY + $(this).height() > elementoPosition) {
  //    //console.log("Ahora");
  //    //console.log("Elemento:" + elemento);
  //    //$(this).animate({ opacity: "1" }, 1500);
  //  //}
  //});
  //
});

/* Add Smooth Scrolling */

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
  });
});


/* -- Fade In -- */
