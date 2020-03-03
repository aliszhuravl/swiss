
    $(window).on('load', function() {
        $('body').addClass('stopped');
        $('#loader').animate({
            width: "100%"
        }, 1200);
        setTimeout(function() {
            $('#loader').fadeOut(500);
        }, 1400);
        setTimeout(function() {
            $('#preloader').removeClass('active_load');
        }, 1800);
        setTimeout(function() {
            $('.header').addClass('header_visible');
        }, 2400);
        setTimeout(function() {
            $('#fone').addClass('fone_move');
        }, 3000);
        setTimeout(function() {
            $('#hero_text').addClass('text_visible');
        }, 3200);
        setTimeout(function() {
            $('#hero_sub').addClass('sub_visible');
        }, 4000);
        setTimeout(function() {
            $('body').removeClass('stopped');
        }, 4000);
    });
