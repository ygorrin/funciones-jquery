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

    $('.ft-btn-toggle').click(function () {
        $('.ft-toggle').toggle("slow");
    });

    $('.ft-slideDowm').hide();
    $('.ft-btn-slideDowm').click(function () {
        $('.ft-slideDowm').slideDown("slow");
    });

    $('.ft-btn-slideUp').click(function () {
        $('.ft-slideUp').slideUp("slow");
    });

    $('.ft-btn-slideToggle').click(function () {
        $('.ft-slideToggle').slideToggle("slow");
    });

    $('.ft-fadeIn').hide();
    $('.ft-btn-fadeIn').click(function () {
        $('.ft-fadeIn').fadeIn("slow");
    });

    $('.ft-btn-fadeOut').click(function () {
        $('.ft-fadeOut').fadeOut("slow");
    });



    $(".ft-btn-append").click(function () {
        $(".ref-append").append(" Soy un APEND ");
    });

    $(".ft-btn-prepend").click(function () {
        $(".ref-prepend").prepend(" Soy un PREPEND ");
    });

    $(".ft-btn-after").click(function () {
        $(".ref-after").after(" Soy un AFTER ");
    });

    $(".ft-btn-before").click(function () {
        $(".ref-before").before(" Soy un BEFORE ");
    });

    $(".ft-btn-html").click(function () {
        $(".ref-html").html(" <h3> H3 ingresado desde Jquery</h3> ");
    });

    $(".ft-btn-text").click(function () {
        $(".ref-text").text(" Text ingresado desde Jquery ");
    });

    $(".ft-btn-val").click(function () {
        let clave = $(".clave").val();
        $(".ref-val").html(`<h3> Tu clave ultra secreta es:</h3> <h1>${clave} </h1>`);
    });

    $(".ft-btn-attr").click(function () {
        let imagenAttr = $('.img-attr').attr("src");
        alert(imagenAttr); 
        $('.img-attr').attr("src", "img/cactus6.jpg")
    });

});