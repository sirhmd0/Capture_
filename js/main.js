$(function () {

  // Navbar Action 

  $('.navbar-btn').on('click', function () {
    $(this).toggleClass("navbar-btn-toggler");
    $(".nav").toggleClass("nav-toggler");
  });

  $('.nav a').on('click', function () {
    $(".nav").removeClass("nav-toggler");
    $('.navbar-btn').removeClass("navbar-btn-toggler");
  });

  // Smooth Scrolling
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  // Owl Carousel Slider
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 2,
        nav: false,
        touchDrag: true
      },
      960: {
        items: 3,
        touchDrag: false,
        mouseDrag: false
      }
    }
  });
});