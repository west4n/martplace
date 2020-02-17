$(function(){

    $('.search__inner-default').click(function(){
        $(this).parent().toggleClass("active");
    })

    $('.search__inner-select li').click(function(){
        let current = $(this).html();
        $('.search__inner-default li').html(current);
        $('.search__inner').removeClass('active');
    })

    $('.weekly-slider__inner').slick({
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow')
    });

    $('.weekly-slider__rate').rateYo({
        ratedFill: "#ffc000",
        starWidth: "15px",
        rating: 5,
        spacing: "3px",
    });

});