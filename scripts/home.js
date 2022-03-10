// $(document).ready(function() {
//     plusDivs(1, 0);
// });

var slideIndex = [1, 1];

var slideId = ["mySlides1", "mySlidesnext"]



showDivs(1, 1);




function plusDivs(n, no) {

    showDivs(slideIndex[no] += n, no);

}



function showDivs(n, no) {

    var i;

    var x = document.getElementsByClassName(slideId[no]);

    if (n > x.length) { slideIndex[no] = 1 }

    if (n < 1) { slideIndex[no] = x.length }

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";

    }

    x[slideIndex[no] - 1].style.display = "block";

}


function gotop() {

    window.scrollTo({

        top: 0,

        behavior: 'smooth',

    });

}






$(function() { $(".flipster").flipster({ style: 'carousel', start: 0 }); });




$(document).ready(function() {
    $("#owl-demo1").owlCarousel1({
        items: 4,
        itemsDesktop: [768, 4],
        itemsDesktopSmall: [414, 3],
        lazyLoad: true,
        autoPlay: false,
        navigation: true,
        rewindNav: false,
        navigationText: true,
        pagination: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']

    });

});

$('.Count').each(function() {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
            $this.text(Math.ceil(this.Counter));
        }
    });
});
showDivs(1, 0);