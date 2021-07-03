/* =========================================
                Preloader
========================================= */
$(window).on('load',function(){
    //make sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white Nav
            $("nav").addClass("white-nav-top");

            // Show dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.jpg");

        } else {

            // Hide white Nav
            $("nav").removeClass("white-nav-top");

            // Show Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.jpg");
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #mac, #subway, #kfc, #optp and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile Nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile Nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =========================================
            Home Animation
========================================= */

// Animate on scroll
$(function () {
    new WOW().init();
});

// Home animation on page load
$(window).on('load',function (){

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");

});

/* =========================================
            Macdonald's
========================================= */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =========================================
        Macdonald's Progress Bars
========================================= */

$(function () {
    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function (){
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            },2000);
        });
        this.destroy();
    },{
        offset: 'bottom-in-view'
    });
});

/* =========================================
                KFC
========================================= */

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // brekpoint from 768 up
            768: {
                items: 1
            }
        }
    });
});

/* =========================================
                BK magnifier
========================================= */

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // Child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});