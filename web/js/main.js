(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '.link-to-block' );

})(jQuery);
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
        speed: 500,
        arrows: true,
        prevArrow: $('#btn_prev_c'),
        nextArrow: $('#btn_next_c')
    });

    $('.items_carousel').on('afterChange', function() {
        console.log('piu');
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
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stopped');
        $('.menu').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stopped');
        $('.menu').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });

    $('.menu-mobile__close').on('click', function () {
        body.addClass('menu-mobile_closed');
    });
})(jQuery);
$(document).ready(function() {
    $(".accordion__item").click(function () {
        if ($("#ac1").hasClass('accordion__item_open')) {
            $("#p1").addClass('chosen');
        } else {
            $("#p1").removeClass('chosen');
        }

        if ($("#ac2").hasClass('accordion__item_open')) {
            $("#p2").addClass('chosen');
        } else {
            $("#p2").removeClass('chosen');
        }

        if ($("#ac3").hasClass('accordion__item_open')) {
            $("#p3").addClass('chosen');
        } else {
            $("#p3").removeClass('chosen');
        }

        if ($("#ac4").hasClass('accordion__item_open')) {
            $("#p4").addClass('chosen');
        } else {
            $("#p4").removeClass('chosen');
        }

        if ($("#ac5").hasClass('accordion__item_open')) {
            $("#p5").addClass('chosen');
        } else {
            $("#p5").removeClass('chosen');
        }
    });

    $(".point").click(function () {
        $(this).addClass('chosen');
        $(this).siblings().removeClass('chosen');
        if ($("#p1").hasClass('chosen')) {
            $("#ac1").addClass('accordion__item_open');
        } else {
            $("#ac1").removeClass('accordion__item_open');
            $('#c1').slideUp(300);
        }

        if ($("#p2").hasClass('chosen')) {
            $("#ac2").addClass('accordion__item_open');
        } else {
            $("#ac2").removeClass('accordion__item_open');
        }

        if ($("#p3").hasClass('chosen')) {
            $("#ac3").addClass('accordion__item_open');
        } else {
            $("#ac3").removeClass('accordion__item_open');
        }

        if ($("#p4").hasClass('chosen')) {
            $("#ac4").addClass('accordion__item_open');
        } else {
            $("#ac4").removeClass('accordion__item_open');
        }

        if ($("#p5").hasClass('chosen')) {
            $("#ac5").addClass('accordion__item_open');
        } else {
            $("#ac5").removeClass('accordion__item_open');
        }
    });
});
$(document).ready(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)

    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        // $next.fadeIn(500);
        $this.parent().toggleClass('accordion__item_open');

        // collapse other accordions
        if (!e.data.multiple) {
            $el.find('.accordion__content').not($next).parent().removeClass('accordion__item_open');
        };
    };

    var accordion = new Accordion($('.accordion'), false);

});