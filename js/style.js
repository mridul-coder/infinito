$(document).ready(function(){
   var mixer = mixitup('.portfolio');
});

$('.testimonialSlider').slick({
   infinite: true,
   slideToShow: 1,
   slideToScroll: 1
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items:1
        },
        600: {
            items:3
        },
        1000: {
            items:5
        }
    }
})
