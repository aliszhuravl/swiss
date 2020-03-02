$(document).ready(function() {
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 80) {
            $(".header").addClass('header_sticky')
        }
        if (80 > scrolled) {
            $(".header").removeClass('header_sticky')
        }

    }
});