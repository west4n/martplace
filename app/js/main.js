$(function(){
    var mixer = mixitup('.newest-filter__wrapper');
    

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

    $('.feed-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: $('.prev__arrow-blue'),
        nextArrow: $('.next__arrow-blue')
    });

    $('.weekly-slider__rate').rateYo({
        ratedFill: "#ffc000",
        starWidth: "15px",
        rating: 5,
        spacing: "3px",
    });

    $('.small-item__rate').rateYo({
        ratedFill: "#ffc000",
        starWidth: "12px",
        rating: 5,
        spacing: "4px",
    });

});