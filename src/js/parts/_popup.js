$(document).ready(function() {
    $("#call_popup").click(function () {
        $("#popup").addClass('visible_popup');
    });
    $("#close_popup").click(function () {
        $("#popup").removeClass('visible_popup');
    });
});