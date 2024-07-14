$(function () {
  // alert("yash");
  if (window.matchMedia("(max-width: 991.99px)").matches) {
    // $(".header .header-desktop .main_menu").slideToggle();
    $(".header .menu-btn").on("click", function () {
      $(".header .header-desktop .main_menu").slideToggle();
    });
    // $('.menu-btn').on ("click",function(){
    //   $(".menu-btn img").toggleAttrVal('src', "assets/images/close-icon.svg","assets/images/menu-icon.svg");
    // });

    $('.menu-btn').click(function() {
      $(this).toggleClass("close");
    });
  }
  $('.js-tilt').tilt({
  });
});
