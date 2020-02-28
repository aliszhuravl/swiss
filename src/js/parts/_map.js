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

    // $(".point").click(function () {
    //     $(this).addClass('chosen');
    //     $(this).siblings().removeClass('chosen');
    //     if ($("#p1").hasClass('chosen')) {
    //         $("#ac1").addClass('accordion__item_open');
    //     } else {
    //         $("#ac1").removeClass('accordion__item_open');
    //     }
    //
    //     if ($("#p2").hasClass('chosen')) {
    //         $("#ac2").addClass('accordion__item_open');
    //     } else {
    //         $("#ac2").removeClass('accordion__item_open');
    //     }
    //
    //     if ($("#p3").hasClass('chosen')) {
    //         $("#ac3").addClass('accordion__item_open');
    //     } else {
    //         $("#ac3").removeClass('accordion__item_open');
    //     }
    //
    //     if ($("#p4").hasClass('chosen')) {
    //         $("#ac4").addClass('accordion__item_open');
    //     } else {
    //         $("#ac4").removeClass('accordion__item_open');
    //     }
    //
    //     if ($("#p5").hasClass('chosen')) {
    //         $("#ac5").addClass('accordion__item_open');
    //     } else {
    //         $("#ac5").removeClass('accordion__item_open');
    //     }
    // });
});