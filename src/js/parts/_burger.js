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

})(jQuery);