$(window).ready(function() {

    ///// MODAL /////

    $('.get-modal').click(function() {
        $('.modal').fadeIn(400).css('display', 'flex');
    });

    $('.modal').click(function(event) {
        var clickedElement = event.target;
        if(!$(clickedElement).closest('.modal-inner').length) {
            $('.modal').fadeOut(400);
        }
        if($(clickedElement).hasClass('close-modal')) {
            $('.modal').fadeOut(400);
        }
    });

    ///// BURGER /////

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('.menu').toggleClass('active');
    });

    while($('.menu').hasClass('active')) {
        $('.wrapper').css('height', '100%');
    }

    $('nav ul').click(function() {
        if ($(window).width() < 740) {
            $('.menu').removeClass('active');
            $('.burger').toggleClass('fa-close fa-bars');
        }
    });

    ///// CUSTOM COUNTER /////

    var defaultCounterValue = 1;
    $('.counter-value').text(defaultCounterValue);
    $('.custom-counter input').val(defaultCounterValue);

    $('.counter-plus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        current++;
        $(this).siblings('.counter-value').text(current);
        $(this).siblings('input').val(current);
    });

    $('.counter-minus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        if(current > 1) {
            current--;
            $(this).siblings('.counter-value').text(current);
            $(this).siblings('input').val(current);
        }
    });

});