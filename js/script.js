$(document).ready(function () {

    $(".ft-click").click(function () {
        $('button').remove('btn-primary');
        $('button').addClass('btn-secondary');
    });

    $(".ft-hide").click(function () {
        $('.ft-hide button').hide();

    });

    $('.ft-show').hide();
    $('.ft-btn-show').click(function () {
        $('.ft-show').show();
    });

    $('.ft-btn-toggle').click(function(){
        $('.ft-toggle').toggle("slow");
    });

    $('.ft-slideDowm').hide();
    $('.ft-btn-slideDowm').click(function(){
        $('.ft-slideDowm').slideDown("slow");
    });

    $('.ft-btn-slideUp').click(function(){
        $('.ft-slideUp').slideUp("slow");
    });

    $('.ft-btn-slideToggle').click(function(){
        $('.ft-slideToggle').slideToggle("slow");
    });

    $('.ft-fadeIn').hide();
    $('.ft-btn-fadeIn').click(function(){
        $('.ft-fadeIn').fadeIn("slow");
    });

    $('.ft-btn-fadeOut').click(function(){
        $('.ft-fadeOut').fadeOut("slow");
    });



});