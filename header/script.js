$(function () {

   // Hamburger
   function hamburger() {
      let hamburger = $('.hamburger'),
          menu = $('.navigation');
      hamburger.on('click', function () {
         $(this).toggleClass('is-active');
         // Menu toggle visible

         // for mobile
         if ($(window).width() < 768) {
            if (hamburger.hasClass('is-active')) {
               menu.css('display', 'flex').hide().slideDown('200');
            } else {
               menu.slideUp('200');
            }
         } else { // for tablet+desktop
            if (hamburger.hasClass('is-active')) {
               menu.css('display', 'flex').hide().fadeIn('200');
            } else {
               menu.fadeOut('200');
            }
         }

      })
   }

   hamburger();


});
