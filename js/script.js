
// Initializing slick carousel
$(document).ready(function() {
   $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2500,
   });
});

// For dynamic years in footer
document.getElementById('year').innerHTML = new Date().getFullYear();
