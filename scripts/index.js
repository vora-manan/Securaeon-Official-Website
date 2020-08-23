// The nav tag had some inbuilt styles in the materialise.min.css file so I changed the nav tag to be a div and changed all occurances to #nav
function myFunction(x) {
  // Screen Size <= 799px
  if (x.matches) {
    $("#nav ul .course-container .courses-btn").unbind();

    $("#nav .logo-container .burger").click(function () {
      $("#nav ul").toggleClass("show");
      $("#nav .logo-container .burger").toggleClass("show");
    });

    $("#nav ul .course-container .courses-btn").click(function () {
      $("#nav ul .course-container").toggleClass("show");
    });

    $(document).click(function () {
      if (
        !$(event.target).closest("#nav ul").length &&
        !$(event.target).closest("#nav .logo-container .burger").length
      ) {
        if ($("#nav ul").hasClass("show")) {
          $("#nav ul").removeClass("show");
          $("#nav .logo-container .burger").removeClass("show");
        }
        if ($("#nav ul .course-container").hasClass("show")) {
          $("#nav ul .course-container").removeClass("show");
        }
      } else if (!$(event.target).closest("#nav ul .course-container").length) {
        if ($("#nav ul .course-container").hasClass("show")) {
          $("#nav ul .course-container").removeClass("show");
        }
      }
    });

    $(window).resize(function () {
      if ($("#nav ul").hasClass("show")) {
        $("#nav ul").removeClass("show");
        $("#nav .logo-container .burger").removeClass("show");
      }
      if ($("#nav ul .course-container").hasClass("show")) {
        $("#nav ul .course-container").removeClass("show");
      }
    });
  } else {
    // Screen Size >= 800px
    $("#nav .logo-container .burger").unbind();
    $("#nav ul .course-container .courses-btn").unbind();
    $("#nav ul .course-container .courses-btn").click(function () {
      $("#nav ul .course-container").toggleClass("show");
      $("#nav ul .course-container .courses-btn").toggleClass("no-hover");
    });

    $(document).click(function () {
      if (!$(event.target).closest("#nav ul .course-container").length) {
        if ($("#nav ul .course-container").hasClass("show")) {
          $("#nav ul .course-container").removeClass("show");
          $("#nav ul .course-container .courses-btn").removeClass("no-hover");
        }
      }
    });
    $(window).resize(function () {
      if ($("#nav ul .course-container").hasClass("show")) {
        $("#nav ul .course-container").removeClass("show");
        $("#nav ul .course-container .courses-btn").removeClass("no-hover");
      }
    });
  }
}

var x = window.matchMedia("(max-width: 799px)");
myFunction(x);
x.addListener(myFunction);

// Add all javascript here

$(document).ready(function(){
  $('.carousel-container .carousel').carousel({
      padding:200,
      numVisible: 5
  });
  $(".left-btn").click(function(){
      $('.carousel').carousel('prev');
  });
  $(".right-btn").click(function(){
      $('.carousel').carousel('next');
  });
});