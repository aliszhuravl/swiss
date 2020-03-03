$(document).ready(function() {
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        arrows: true,
        dots: true,
        prevArrow: $('#btn_prev'),
        nextArrow: $('#btn_next')
    });
    $('.main-slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.b-slide-number').text(indexSlide);
        });

    $('.events_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        prevArrow: $('#btn_prev_e'),
        nextArrow: $('#btn_next_e'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.items_carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 700,
        arrows: true,
        prevArrow: $('#btn_prev_c'),
        nextArrow: $('#btn_next_c')
    });

    $('.items_carousel').on('afterChange', function() {
        $('.banner_img').addClass('get_bigger');

    });

    $('.items_carousel').on('beforeChange', function(){
        console.log('uip');
        $('.banner_img').removeClass('get_bigger');

    });

    $('.items_carousel').init( function(){
        $('.banner_img').addClass('get_bigger');

    });

    $('.items_carousel')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.b-slide-number').text(indexSlide);
        });
});