/**
 * Custom.js
 * @author: Ale Ruiz
 */

$(window).on("load", function () {
  $("#preload").addClass("loaded");
});
$(document).ready(() => {
  $("#preload").remove();
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

/* Add Smooth Scrolling */
$(document).ready(function () {
  $(".smoothScroll").each(function () {
    $(this).click(function (event) {
      var href = $(this).attr("href");

      if (href !== "" && href !== "undefined") {
        event.preventDefault();

        $("html, body").animate(
          { scrollTop: $(href).offset().top },
          800,
          () => (window.location.hash = href)
        );
      }
    });
  });
});

/**
 * ANIMATIONS
 */

/* Fade In elements on Scroll */
$(document).ready(() => {
  var elementos = $(".fade-in");

  $(window).scroll(() => {
    var scrollY = $(this).scrollTop() + $(this).height();

    $(elementos).each((index, elemento) => {
      if (scrollY > $(elemento).position().top + 300) {
		$(elemento).animate({ opacity: 1 }, 1500);
	  }
    });
  });
});
