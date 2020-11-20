$(document).ready(function () {
  $("body").css("padding-top", $(".navbar").outerHeight() + "px");
  // detect scroll top or down
  if ($(".smart-scroll").length > 0) {
    // check if element exists
    var last_scroll_top = 0;
    $(window).on("scroll", function () {
      scroll_top = $(this).scrollTop();
      if (scroll_top < last_scroll_top) {
        $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
      } else {
        $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below
    $(this).addClass("active");
  });
});
// AUDIO
