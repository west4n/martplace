$(function(){
    var containerEl = document.querySelector('.newest-filter__wrapper');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {});
    }
    
    $('.header__burger').click(function(){
        $('.header__burger,.menu').toggleClass('active')
    });

    $('.dropdown-home').click(function(){
        $('.dropdown__menu-home').toggleClass('active')
    });
    $('.dropdown-products').click(function(){
        $('.dropdown__menu-products').toggleClass('active')
    });
    $('.dropdown-wordpress').click(function(){
        $('.dropdown__menu-wordpress').toggleClass('active')
    });
    $('.dropdown__pages').click(function(){
        $('.dropdown__wrapper').toggleClass('active')
    });
    $(document).on("click", function(e) {
        if ($(e.target).hasClass('header__dropdown-btn'))
        $(".header__info").toggleClass("active");
        else
        $(".header__info").removeClass("active");
    });
    $('.header__dropdown-close').click(function(){
        $('.header__info').removeClass('active')
    });


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

    $('.point__star').rateYo({
        ratedFill: "#ffc000",
        starWidth: "12px",
        rating: 5,
        spacing: "4px",
    });

    $('.category__item-star').rateYo({
        ratedFill: "#ffc000",
        starWidth: "12px",
        rating: 5,
        spacing: "4px",
    });

    $('.product__tabs-wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product__tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.product__tabs-wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
    
    $('select').styler();

    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        hide_min_max: true,
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        step: 15,
        prefix: '$'
    });

    $('.filter__btn-tab').click(function(){
        $('.category__item').removeClass('list')
    })
    $('.filter__btn-list').click(function(){
        $('.category__item').addClass('list')
    })

});