jQuery( document ).ready(function( $ ) {

    $(window).stellar({
          horizontalOffset: 100,
          verticalOffset: 150
    });

    // Carregando Destaques Direto
    setTimeout(function() {jQuery("#content").addClass("normalize")} , 1000);

    // Travar Menu
    if (jQuery(this).scrollTop() >= ($("#content").offset().top)-100) {
        $("#menu-fixed").fadeIn( "fast");
        $("#social-media").addClass("fixed");
        setTimeout(function() {jQuery("#publicacoes").addClass("normalize")} , 500);

    } else {
        $("#menu-fixed").fadeOut( "fast");
        $("#social-media").removeClass("fixed");
    }
    
});

jQuery(window).scroll(function () {
    // Travar Menu
    if (jQuery(this).scrollTop() >= ($("#content").offset().top)-100) {
        $("#menu-fixed").fadeIn( "fast");
        $("#social-media").addClass("fixed");
        setTimeout(function() {jQuery("#publicacoes").addClass("normalize")} , 500);

    } else {
        $("#menu-fixed").fadeOut( "fast");
        $("#social-media").removeClass("fixed");
    }
});


//Scroll Fluid to #div
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});
