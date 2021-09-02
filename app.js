$(function() {

    /*шапка*/
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function() {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if(scrollPos > introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }


});


/*smoth scroll*/

$("[data-scroll]").on("click", function(event) {
event.preventDefault();

let elementID = $(this).data("scroll");
let elementOffset = $(elementID).offset().top;
let nav = $("#nav");
 nav.removeClass("show");

$("html, body").animate({
scrollTop: elementOffset - 65
});
});


/* nav toogle */
let navToggle = $("#navToggle");
navToggle.on("click", function(event) {
    event.preventDefault();
    let nav = $("#nav");
    nav.toggleClass("show");


});

/*reviewsSlider*/
let slider = $("#reviewsSlider");
slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: true
  });

});