$(function () {

   // Hamburger
   function hamburger() {
      let hamburger = $('.hamburger');
      hamburger.on('click', function () {
         $(this).toggleClass('is-active');
      })
   }
   hamburger();


});