jQuery(function ($) {
    'use strict';
    $('.banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots: false,
        nav:true,
        autoplay:true,
        navText: ["<i class='bx bxs-chevron-left'></i>", "<i class='bx bxs-chevron-right'></i>"]
    })
    $('.slider-item').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
 });
 