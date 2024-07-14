$(function () {
  if (window.matchMedia("(max-width: 991.99px)").matches) {
    $(".header .menu-btn").on("click", function () {
      $(".header .header-desktop .main_menu").slideToggle();
    });

    $(".menu-btn").click(function () {
      $(this).toggleClass("close");
    });
  }
  $(".js-tilt").tilt({});
});
