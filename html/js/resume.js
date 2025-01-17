(function($) {
  "use strict"; // Start of use strict

  function smoothScroll(event) {
    var pathname = location.pathname.replace(/^\//, '');
    var hostname = location.hostname;
    var targetHash = this.hash;
    var target = $(targetHash);

    if (pathname === this.pathname.replace(/^\//, '') && hostname === this.hostname) {
      target = target.length ? target : $('[name=' + targetHash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        event.preventDefault();
      }
    }
  }

  function closeResponsiveMenu() {
    $('.navbar-collapse').collapse('hide');
  }

  function activateScrollSpy() {
    $('body').scrollspy({
      target: '#sideNav'
    });
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(smoothScroll);

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(closeResponsiveMenu);

  // Activate scrollspy to add active class to navbar items on scroll
  activateScrollSpy();

})(jQuery); // End of use strict
